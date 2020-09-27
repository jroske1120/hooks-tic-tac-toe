import React, { useState } from "react";
import { calculateWinner } from "../calcFunction";
import Board from "./Board";

const styles = {
  width: "200px",
  margin: "10px auto",
};

const Game = () =>{
  //set board to array of nulls
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = (i) => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];

    //if there's a winner or if user clicks occupied square
    if (winner || squares[i]) return;

    //otherwise, put x or o in clicked square
    squares[i] = xIsNext ? "X" : "O";
    //set board state to new state
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    //set next player to opposite
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move#${move}` : "Go to start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div styles={styles}>
        <p>
          {winner ? `Winner is ${winner}` : `Next up is ${xIsNext ? "X" : "O"}`}
        </p>
        {renderMoves()}
      </div>
    </>
  );
}

export default Game;
