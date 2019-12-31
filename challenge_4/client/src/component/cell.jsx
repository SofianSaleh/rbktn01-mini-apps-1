import React, { Component } from 'react';
import Row from "./row.jsx";
c
const Cell = ({ value, columnIndex, play }) => {
  let color = 'white';
  if (value === 1) {
    color = 'blue';
  } else if (value === 2) {
    color = 'yellow';
  }

  return (
    <td>
      <div className="cell" onClick={() => {play(columnIndex)}}>
        <div className={color}></div>
      </div>
    </td>
  );
};

export default cell;





















