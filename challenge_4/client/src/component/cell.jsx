import React, { Component } from 'react';
import Row from "./row.jsx";


class Cell extends Component {
    constructor (props) {
        super(props)
        this.state = {
            color: 'white'
        }
    }

    render() {
        if (this.props.value === 1) {
            color = 'blue';
          } else if (this.props.value === 2) {
            color = 'yellow';
          }
        return (
            <td>
            <div className="cell" onClick={() => {play(columnIndex)}}>
              <div className={color}></div>
            </div>
          </td>
        );
    }
}

export default Cell;






















