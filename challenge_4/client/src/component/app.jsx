import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor() {
        super() 
        this.state = {
            player1: 1,
            palyer2: 2,
            current: null,
            board: []],
            gameOver: false,
            message: ''
        }
    }
// initialize board dynamicaly
    intitalaizeBoard(){
        let board = [];
        for (let r = 0; r < 6; r++) {
            var row = []
            for (let c = 0; c < 7; c++) {
                row.push(null) 
            }
            board.push(row)
        }
        this.setState({
            board,
            currentPlayer: this.state.player1,
        });
    }
// toggle player function
    togglePlayer() {
        return (this.state.current === this.state.player1) ? this.state.player2 : this.state.player2;
    }
// change the board once clicked
play(c) {
    if(!this.state.gameOver) {
        for (let r = 5; r >= 0; r--){
            if(!board[r][c]) {
                board[c][r] = this.state.currentPlayer
            }
        }
    }
}


    render() {
        return (
            <div>
               <h1>fghdfgh</h1>
            </div>
        );
    }
}

export default App;
