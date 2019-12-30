// Main variables
// alert("<input></input>","Player One Name");
// window.alert("Player Two Name");

let p1 = prompt('Player 1 Name', 'Player One')
let p2 = prompt('Player 2 Name', 'Player Two')
var p1Score = 0;
var p2Score = 0;
let count = 0;
var round = 0
var grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];


// function that gets the id form html and changes the divs to either x or o

document.getElementById('p1').innerHTML = `${p1} : ${p1Score}`
document.getElementById('p2').innerHTML = `${p2} : ${p2Score}`
document.getElementById('round').innerHTML = `Round : ${round}`


var getId = (id) => {
    var x = document.getElementsByClassName('tile');
    if (count % 2 === 0) {
        if (main(id, 'X')) {

            x[id].innerHTML = "X";
            count++;

            if (checkRowsDiag('X') || checkCol('X')) {
                playerWins('X')
                alert(`${p1} WINS!`)
                end();
            }
            if(count === 8){
            if(checkDraw()) {
                alert(`${p1} AND ${p2} HAVE DRAWN!`)
                end()
            }
        }
        }
    } else {
        if (main(id, 'O')) {
            x[id].innerHTML = "O";
            count++;
            if (checkRowsDiag('O') || checkCol('O')) {
                playerWins('O')
                alert(`${p2} WINS!`)
                end()
            }
            if(count === 8){
            if(checkDraw()) {
                alert(`${p1} AND ${p2} HAVE DRAWN!`)
                end()
            }
        }
    }
    }

}
// Main function that checks and changes the array to either 1 or 2

var main = (id, sign) => {

    if (grid[id] === 0) {
        if (sign === 'X') {
            grid[id] = 1
        } else if (sign === 'O') {
            grid[id] = 2
        }
        return true
    } else {
        alert('POSITION TAKEN')
        return false
    }
}
// Checker function checks rows columns and diagonal

var checkRowsDiag = (sign) => {
    for (let i = 0; i < 9; i = i + 3) {
        if (sign === 'X') {
            if (grid[i] === 1 && grid[i + 1] === 1 && grid[i + 2] === 1) {
                return true
            }
            if (grid[0] === 1 && grid[4] === 1 && grid[8] === 1 || (grid[2] === 1 && grid[4] === 1 && grid[6] === 1)) {
                return true
            }
        } else if (sign === 'O') {
            if (grid[i] === 2 && grid[i + 1] === 2 && grid[i + 2] === 2) {
                return true
            }
            if ((grid[0] === 2 && grid[4] === 2 && grid[8] === 2) || (grid[2] === 2 && grid[4] === 2 && grid[6] === 2)) {
                return true
            }
        }
    }
    return false
}

var checkCol = (sign) => {
    if (sign === 'X') {
        for (let i = 0; i < 3; i++) {
            if (grid[i] === 1 && grid[i + 3] === 1 && grid[i + 6] === 1) {
                return true
            }
        }
    } else if (sign === 'O') {
        for (let i = 0; i < 3; i++) {
            if (grid[i] === 2 && grid[i + 3] === 2 && grid[i + 6] === 2) {
                return true
            }
        }
    }
    return false
}

var checkDraw = () => {
    var arrX = [];
    var arrY = [];
    round++
        for (let i = 0; i < grid.length; i++) {
            if(grid[i] === 1) {
                arrX.push(1)
            }else if(grid[i] === 2) {
                arrY.push(2)
            }
        }

        document.getElementById('round').innerHTML = `Round : ${round}`
    return arrX.length === arrY.length
}

var clean = () => {
    count = 0;
    var x = document.getElementsByClassName('tile')
    for (let k = 0; k < grid.length; k++) {
        x[k].innerHTML = '-'
        grid[k] = 0
    }
}

var playerWins = (sign = null) => {
    round++
    if(sign === 'X'){
        p1Score++
        document.getElementById('p1').innerHTML = `${p1} : ${p1Score}`
    }else if(sign === 'O'){
        p2Score++
        document.getElementById('p2').innerHTML = `${p2} : ${p2Score}`
    }
    document.getElementById('round').innerHTML = `Round : ${round}`
}

var end = () => {
    for (let i = 0; i < grid.length; i++) {
        grid[i] = 1
    }
}
