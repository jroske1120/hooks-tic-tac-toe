import React, { useState } from "react";
import { calculateWinner } from "../index";
import Board from "./Board";

const styles = {
  width: "200px",
  margin: "10px auto",
};

const Game = () => {
  //set board to array of nulls
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];

    if (winner || boardCopy[i]) {
      return;
    }
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

//   const jumpTo = () => {};
//   const renderMoves = () => {};

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div styles={styles}>
        <p>
          {winner ? `Winner is ${winner}` : `Next up is ${xIsNext ? "X" : "O"}`}
        </p>
      </div>
    </>
  );
};

export default Game;
