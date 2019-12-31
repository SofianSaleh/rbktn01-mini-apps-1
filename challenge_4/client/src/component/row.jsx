import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from "./app.jsx";

class Row extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <tr>
                {this.props.row.map((cell, i) => {
                    <Cell key={i} value={cell} columnIndex={i} playGame={this.props.playGame} />
                })}
            </tr>
        );
    }
}

export default Row;

