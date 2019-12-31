import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from "./app.jsx";
import Cell from "./Cell.jsx";

class Row extends Component {
    constructor(props) {
        super(props)
        console.log('hi')
    }
    render() {
        return (
            <div>

                <script>{console.log("hi")}</script>
            <tr>
                {this.props.row.map((cell, i) => {
                    <Cell key={i} value={cell} columnIndex={i} playGame={this.props.playGame} />
                })}
            </tr>
            </div>
        );
    }
}

export default Row;

