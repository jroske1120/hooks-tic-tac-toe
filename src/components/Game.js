import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { calculateWinner } from "../index";
import Board from "./Board";

const Game = () => {
  //set board to array of nulls
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = () => {
    // const history = this.state.history.slice(0, this.state.stepNumber + 1);
    // const current = history[history.length - 1];
    // const squares = current.squares.slice();
    // if (calculateWinner(squares) || squares[i]) {
    //   return;
    // }
    // squares[i] = this.state.xIsNext ? "X" : "O";
    // this.setState({
    //   history: history.concat([
    //     {
    //       squares: squares,
    //     },
    //   ]),
    //   stepNumber: history.length,
    //   xIsNext: !this.state.xIsNext,
    // });
  };

  const jumpTo = () => {
    // this.setState({
    //   stepNumber: step,
    //   xIsNext: step % 2 === 0,
    // });
  };
  const renderMoves = () => {};

  return <Board 
  squares={board}
  onClick={handleClick} />;
};

export default Game;
