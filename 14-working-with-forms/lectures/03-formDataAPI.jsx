// ? FormData (cleanest for big forms)
// * Native browser FormData works great in React too — no state, no refs needed:

function SignupForm() {
  function handleSubmit(e) {
    e.preventDefault();

    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data); // { email: '...', password: '...' }

    e.target.reset(); // clear the form
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" /> {/* name attr is required! */}
      <input type="password" name="password" />
      <button type="submit">Sign Up</button>
    </form>
  );
}
