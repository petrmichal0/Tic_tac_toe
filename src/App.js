import { useState, useEffect } from "react";

import Cell from "./components/Cell";

const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState("");
  const [scorePlayer1, setScorePlayer1] = useState(0);
  const [scorePlayer2, setScorePlayer2] = useState(0);

  const message = `it is now ${go}´s go.`;

  function handleNewRound() {
    setCells(["", "", "", "", "", "", "", "", ""]);
    setGo((go) => setGo(go === "circle" ? "circle" : "cross"));
    setWinningMessage("");
  }

  function handleNewGame() {
    setCells(["", "", "", "", "", "", "", "", ""]);
    setScorePlayer1(0);
    setScorePlayer2(0);
    setGo("circle");
    setWinningMessage("");
  }

  useEffect(() => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winningCombos.forEach((array) => {
      let circleWins = array.every((cell) => cells.at(cell) === "circle");

      if (circleWins) {
        setWinningMessage("Cicle wins");
        setScorePlayer1((scorePlayer1) => scorePlayer1 + 1);
      }
    });

    winningCombos.forEach((array) => {
      let crossWins = array.every((cell) => cells.at(cell) === "cross");

      if (crossWins) {
        setWinningMessage("Cross wins");
        setScorePlayer2((scorePlayer2) => scorePlayer2 + 1);
      }
    });
  }, [cells]);

  return (
    <div className="app">
      <p className="text__score">
        o {scorePlayer1}:{scorePlayer2} x
      </p>

      <div className="gameboard">
        {cells.map((cell, index) => {
          return (
            <Cell
              key={index}
              id={index}
              cell={cell}
              setCells={setCells}
              go={go}
              setGo={setGo}
              cells={cells}
              winningMessage={winningMessage}
            />
          );
        })}
      </div>

      <p>{winningMessage || message}</p>

      <button className="btn" onClick={handleNewRound}>
        New Round
      </button>

      <button className="btn" onClick={handleNewGame}>
        New Game
      </button>
    </div>
  );
};

export default App;
