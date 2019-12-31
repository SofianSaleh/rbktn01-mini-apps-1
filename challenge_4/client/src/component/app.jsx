import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Row from './row.jsx'

class App extends Component {
    constructor() {
        super()
        this.state = {
            player1: 1,
            player2: 2,
            current: null,
            board: [],
            gameOver: false,
            message: ''
        }
    }
    // initialize board dynamicaly
    intitalaizeBoard() {
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
        if (!this.state.gameOver) {
            for (let r = 5; r >= 0; r--) {
                if (!board[r][c]) {
                    board[c][r] = this.state.currentPlayer
                }
            }
        }
    }
    // Check vertical

    checkVertical(board) {
        for (let r = 3; r < 6; r++) {
            for (let c = 0; c < 7; c++) {
                if (board[r][c]) {
                    if (board[r][c] === this.state.currentPlayer &&
                        board[r + 1][c + 1] === this.state.currentPlayer &&
                        board[r + 2][c + 2] === this.state.currentPlayer &&
                        board[r + 3][c + 3] === this.state.currentPlayer
                    ) {

                        return board[r][c]
                    }

                }
            }

        }
    }

    checkHorizantal(board) {
        for (let r = 0; r < 6; r++) {
            for (let c = 0; c < 7; c++) {
                if (
                    board[r][c] === this.state.currentPlayer &&
                    board[r + 1][c + 1] === this.state.currentPlayer &&
                    board[r + 2][c + 2] === this.state.currentPlayer &&
                    board[r + 3][c + 3] === this.state.currentPlayer
                ) {

                    return board[r][c]
                }

            }

        }
    }

    checkMinorDiagonal1() {
        for (let r = 3; r < 6; r++) {
            for (let c = 0; c < 4; c++) {
                if (
                    board[r][c] === this.state.currentPlayer &&
                    board[r - 1][c - 1] === this.state.currentPlayer &&
                    board[r - 2][c - 2] === this.state.currentPlayer &&
                    board[r - 3][c - 3] === this.state.currentPlayer
                ) {
                    return board[r][c]
                }

            }

        }
    }

    checkMajorDiagonal() {
        for (let r = 3; r < 6; r++) {
            for (let c = 4; c < 7; c++) {
                if (
                    board[r][c] === this.state.currentPlayer &&
                    board[r - 1][c + 1] === this.state.currentPlayer &&
                    board[r - 2][c + 2] === this.state.currentPlayer &&
                    board[r - 3][c + 3] === this.state.currentPlayer
                ) {
                    return board[r][c]
                }

            }

        }
    }

    checkDraw(board) {
        for (let r = 0; r < 6; r++) {
            for (let c = 0; c < 7; c++) {
                if (board[r][c] === null) {
                    return null;
                }
            }
        }
        return 'draw';
    }

    checkAll(board) {
        return (this.checkHorizantal(board) || this.checkVertical(board) || this.checkMajorDiagonal(board) || this.checkMinorDiagonal1(board) || this.checkDraw(board))
    }


    playGame(c) {
        if (!this.state.gameOver) {
            for (let r = 5; r >= 0; r--) {
                if (!this.state.board[r][c]) {
                    this.state.board[r][c] = this.state.currentPlayer;
                    break;
                }
            }
            if (this.checkAll(board) === this.state.player1) {
                this.setState({
                    board,
                    gameOver: true,
                    message: 'Player One wins'
                })
            } else if (this.checkAll(board) === this.state.player2) {
                this.setState({
                    board,
                    gameOver: true,
                    message: 'Player Two wins'
                })
            } else if (this.checkAll(board) === 'draw') {
                this.setState({
                    board,
                    gameOver: true,
                    message: "It's A DRAW"
                })
            }
        }
    }

    UNSAFE_componentWillMount() {

        this.intitalaizeBoard();
    }
    render() {


        return (
            <div>
                <button id="Start" onClick={this.intitalaizeBoard()}>New Game</button>
                <table>
                    <tbody>
                        {this.state.board.map((row, index) => {
                            <Row key={index} row={row} playGame={this.playGame.bind(this)} />
                        })}
                    </tbody>
                </table>
                <p id="message">{this.state.message}</p>
            </div>
        );
    }
}

export default App;




