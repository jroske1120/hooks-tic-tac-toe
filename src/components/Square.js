import React, { 
    // useState
 } from "react";

const styles = {
  background: "lightblue",
  border: "2px solid black",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};

const Square = ({ value, onClick }) => (
  <button styles={styles} onClick={onClick}>
    {value}
  </button>
);

export default Square;
