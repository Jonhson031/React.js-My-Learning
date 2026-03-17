// ? useCallback hook
// returns a memorized version of a function — meaning React caches the function and only recreates it when its dependencies change.

// In React, every re-render recreates everything inside the component — including functions:

// ❌ BAD — fetchUser is new every render → effect runs infinitely
function Profile({ userId }) {
  const fetchUser = async () => {        // new function every render
    const data = await api.getUser(userId);
    setUser(data);
  };

  useEffect(() => {
    fetchUser();
  }, [fetchUser]); // triggers every render!
}

// ✅ GOOD — fetchUser is stable between renders
function Profile({ userId }) {
  const fetchUser = useCallback(async () => {
    const data = await api.getUser(userId);
    setUser(data);
  }, [userId]); // only recreated when userId changes

  useEffect(() => {
    fetchUser();
  }, [fetchUser]); // now behaves correctly
}