import React, { useState } from "react";
import Square from "./Square";

const styles = {
    border: "4px solid black",
    borderRadius: "10px",
    width: "250px",
    height: "250px",
    margin: "0 auto",
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
  };

const Board = ({ squares, onClick }) => (
  <div styles={styles}>
    <Square value='1' onClick={() => {'dummy val'}} />
    <Square value='2' onClick={() => {'dummy val'}} />
    <Square value='3' onClick={() => {'dummy val'}} />

    <Square value='4' onClick={() => {'dummy val'}} />
    <Square value='5' onClick={() => {'dummy val'}} />
    <Square value='6' onClick={() => {'dummy val'}} />

    <Square value='7' onClick={() => {'dummy val'}} />
    <Square value='8' onClick={() => {'dummy val'}} />
    <Square value='9' onClick={() => {'dummy val'}} />
  </div>
);

export default Board;
