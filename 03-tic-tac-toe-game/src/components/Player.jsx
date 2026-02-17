import { useState } from "react";

export default function Player({
  initialName,
  playerSymbol,
  isActive,
  onNameChange,
}) {
  // ? User Input & Two-Way-Binding
  const [playerName, setPlayerName] = useState(initialName);

  const [isEditing, setIsEditing] = useState(false);

  // ? Best Practice: Updating State Based On Old State Correctly
  // When updating state based on old state, we must pass function to our state updating function
  function handleEditClick() {
    setIsEditing((edit) => !edit);
    if (isEditing) onNameChange(playerSymbol, playerName);
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  let nameTag = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    nameTag = (
      <input
        type="text"
        value={playerName}
        onChange={handleChange}
        required
      ></input>
    ); // onChange - works when user changes input value
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {nameTag}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
