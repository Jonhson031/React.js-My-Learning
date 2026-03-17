import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [playerName2, setPlayerName] = useState("");
  // const [sumbittedName, setSubmittedName] = useState(false);

  // function handleChange(e) {
  //   setSubmittedName(false);
  //   setPlayerName(e.target.value);
  // }

  function handleClick(){
    console.log(playerName)
    setPlayerName(playerName.current.value) // to access ref element
    playerName.current.value = ""; // to clear input after submit
  }

  return (
    <section id="player">
      <h2>Welcome {playerName2}</h2>
      <p>
        {/* to set ref property:  */}
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
