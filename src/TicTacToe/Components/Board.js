import React from "react";

import Square from "./Square";

const Board = ({ board, handleBoxClick }) => {
  return (
    <div className="board">
      {board.map((value, idx) => {
        return (
          <Square
            key={idx}
            value={value}
            onClick={() => value === null && handleBoxClick(idx)}
          />
        );
      })}
    </div>
  );
};

export default Board;
