import gameLogoImg from "./assets/game-logo.png";
import Player from "./components/Player.jsx";

function App() {
  return (
    <>
      <header>
        <img src={gameLogoImg} alt="Hand drawn Tic Tac Toe game board" />
        <h1>Tic Tac Toe</h1>
      </header>
      <main>
        <div id="game-container">
          <ol id="players">
            <Player playerName="Player 1" playerSymbol="X"></Player>
            <Player playerName="Player 2" playerSymbol="O"></Player>
          </ol>
        </div>
      </main>
    </>
  );
}

export default App;
