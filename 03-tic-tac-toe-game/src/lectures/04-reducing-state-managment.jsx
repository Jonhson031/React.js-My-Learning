// ? Reducing state managment and identifying unnecessary state
// State should be minimal.
// Store only what absolutely must be stored.

// const [activePlayer, setActivePlayer] = useState("X"); - unnecessary state

function deriveActivePlayer(prevTurns) {
  let curPlayer = "X";
  if (prevTurns.length > 0 && prevTurns[0].player === "X") curPlayer = "O";
  return curPlayer;
}

const activePlayer = deriveActivePlayer(gameTurns);

function handleSelectSquare(rowIndex, colIndex) {
  // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
  setGameTurns((prevTurns) => {
    const curPlayer = deriveActivePlayer(prevTurns);

    const updatedTurns = [
      { square: { row: rowIndex, col: colIndex }, player: curPlayer },
      ...prevTurns,
    ];

    return updatedTurns;
  });
}
