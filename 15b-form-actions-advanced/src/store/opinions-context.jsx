import { createContext, useEffect, useState } from 'react';

export const OpinionsContext = createContext({
  opinions: null,
  addOpinion: (opinion) => {},
  upvoteOpinion: (id) => {},
  downvoteOpinion: (id) => {},
});

export function OpinionsContextProvider({ children }) {
  const [opinions, setOpinions] = useState();

  useEffect(() => {
    async function loadOpinions() {
      const response = await fetch('http://localhost:3000/opinions');
      const opinions = await response.json();
      setOpinions(opinions);
    }

    loadOpinions();
  }, []);

  async function addOpinion(enteredOpinionData) {
    console.log(enteredOpinionData);
    try {
      const response = await fetch('http://localhost:3000/opinions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(enteredOpinionData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit opinion.');
      }

      const savedOpinion = await response.json();
      setOpinions((prevOpinions) => [savedOpinion, ...prevOpinions]);
    } catch (err) {
      console.error(err);
    }
  }

  async function upvoteOpinion(id) {
    setOpinions((prevOpinions) => {
      return prevOpinions.map((opinion) => {
        if (opinion.id === id) {
          return { ...opinion, votes: opinion.votes + 1 };
        }
        return opinion;
      });
    });

    try {
      const res = await fetch(`http://localhost:3000/opinions/${id}/upvote`, {
        method: 'POST',
      });
      if (!res.ok) {
        throw new Error('Failed to submit data.');
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function downvoteOpinion(id) {
    setOpinions((prevOpinions) => {
      return prevOpinions.map((opinion) => {
        if (opinion.id === id) {
          return { ...opinion, votes: opinion.votes - 1 };
        }
        return opinion;
      });
    });

    try {
      const res = await fetch(`http://localhost:3000/opinions/${id}/downvote`, {
        method: 'POST',
      });
      if (!res.ok) {
        throw new Error('Failed to submit data.');
      }
    } catch (err) {
      console.error(err);
    }
  }

  const contextValue = {
    opinions: opinions,
    addOpinion,
    upvoteOpinion,
    downvoteOpinion,
  };

  return <OpinionsContext value={contextValue}>{children}</OpinionsContext>;
}
