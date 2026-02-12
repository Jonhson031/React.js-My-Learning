import { useState } from "react";

export default function Player({ playerName, playerSymbol, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);

  // ? Best Practice: Updating State Based On Old State Correctly
  // When updating state based on old state, we must pass function to our state updating function

  function handleEditClick() {
    return setIsEditing((edit) => !edit);
  }

  let nameTag = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    nameTag = <input type="text" value={playerName} required></input>;
    btnCaption = "Save";
  }

  return (
    <li>
      <span className="player">
        {nameTag}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
