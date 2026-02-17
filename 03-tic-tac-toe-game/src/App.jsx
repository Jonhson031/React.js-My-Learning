import { useState } from "react";

import gameLogoImg from "./assets/game-logo.png";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

function deriveGameBoard(gameTurns) {
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const gameBoard = [...initialGameBoard.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function deriveWinner(gameBoard, players) {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  // ? Reducing state managment and identifying unncessary state
  // const [activePlayer, setActivePlayer] = useState("X"); - unnecessary state

  function deriveActivePlayer(prevTurns) {
    let curPlayer = "X";
    if (prevTurns.length > 0 && prevTurns[0].player === "X") curPlayer = "O";
    return curPlayer;
  }

  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, players);

  const hasDraw = gameTurns.length === 9 && !winner;

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

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  return (
    <>
      <header>
        <img src={gameLogoImg} alt="Hand drawn Tic Tac Toe game board" />
        <h1>Tic Tac Toe</h1>
      </header>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              isActive={activePlayer === "X"}
              initialName={PLAYERS.X}
              playerSymbol="X"
              onNameChange={handlePlayerNameChange}
            ></Player>
            <Player
              isActive={activePlayer === "O"}
              initialName={PLAYERS.O}
              playerSymbol="O"
              onNameChange={handlePlayerNameChange}
            ></Player>
          </ol>
          <GameBoard
            onSelectSquare={handleSelectSquare}
            gameBoard={gameBoard}
          ></GameBoard>
        </div>
        <Log turns={gameTurns}></Log>
        {(winner || hasDraw) && (
          <GameOver onRestart={handleRestart} winner={winner}></GameOver>
        )}
      </main>
    </>
  );
}

export default App;
