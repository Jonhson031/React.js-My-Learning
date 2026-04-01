// ? Optimistic Updates with useOptimistic()
// * Optimistic updating means updating the UI immediately before the server confirms the change — optimistically assuming the request will succeed. If it fails, you roll back.

import { useOptimistic } from 'react';

function OpinionItem({ opinion, onUpvote }) {
  const [optimisticVotes, setOptimisticVotes] = useOptimistic(
    opinion.votes, // real value
    (currentVotes) => currentVotes + 1, // how to update optimistically
  );

  async function upvoteAction() {
    setOptimisticVotes(); // instantly shows +1

    try {
      await fetch(`/opinions/${opinion.id}/upvote`, { method: 'POST' });
      onUpvote(opinion.id); // sync real state after success
    } catch (err) {
      console.error(err);
      // automatically rolls back to opinion.votes on failure
    }
  }

  return (
    <div>
      <p>{optimisticVotes} votes</p>
      <button onClick={upvoteAction}>Upvote</button>
    </div>
  );
}

// ? Without useOptimistic hook:

// ✅ OPTIMISTIC — instant feedback
function OpinionItem({ opinion }) {
  const [votes, setVotes] = useState(opinion.votes);

  async function handleUpvote() {
    // Step 1 — Update UI immediately
    setVotes((v) => v + 1);

    try {
      const res = await fetch(`/opinions/${opinion.id}/upvote`, { method: 'POST' });
      if (!res.ok) throw new Error('Failed');

      // Step 2 — Optionally sync with server's actual value
      const data = await res.json();
      setVotes(data.votes);
    } catch (err) {
      // Step 3 — Roll back if it failed
      setVotes((v) => v - 1);
      console.error('Upvote failed, rolling back');
    }
  }

  return (
    <div>
      <p>{votes} votes</p>
      <button onClick={handleUpvote}>Upvote</button>
    </div>
  );
}
