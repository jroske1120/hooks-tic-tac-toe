import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";


const Square = ({ value, onClick }) => (
<button className="square" onClick={onClick}>
      {value}
    </button>
    )

export default Square;
