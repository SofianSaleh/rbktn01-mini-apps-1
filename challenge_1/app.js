let count = 0;
var grid = [0, 0 ,0 ,0, 0 ,0 ,0, 0 ,0]
let rows = 3



var getId = (id) => {
    var x = document.getElementsByClassName('tile');
    if( count % 2 === 0 ){
        if(main(id, 'X')) {

         x[id].innerHTML = "X";
         count++;

         if(checkRowsColDiag('X')) {
            console.log('winner x')
        }
            
    
        }
    }else{
        if(main(id, 'O')) {
            x[id].innerHTML = "O";
            count++;
            if(checkRowsColDiag('O')) {
                console.log('win o')
            }
        }
}
}

var main = (id, sign) => {

    if(grid[id] === 0) {
        if(sign === 'X'){
            grid[id] = 1
            console.log(grid)
        }else if(sign === 'O'){
            grid[id] = 2
            console.log(grid)
        }
        return true
    }else {
        console.log('position taken')
        return false
    }
}

var checkRowsColDiag = (sign) => {
    for (let i = 0; i < 8; i = i + 3) {
        if(sign === 'X'){
            if(grid[i] === 1 && grid[i+1] === 1 && grid[i+2] === 1){
                return true
            }
            if(grid[i] === 1 && grid[i+3] === 1 && grid[i+6] === 1){
            return true
            }
            if(grid[0] === 1 && grid[4] === 1 && grid[8] === 1){
                return true
            }
        }else if(sign === 'O'){
            if(grid[i] === 2 && grid[i+1] === 2 && grid[i+2] === 2){
                return true
            }
            if(grid[i] === 2 && grid[i+3] === 2 && grid[i+6] === 2){
                return true
            }
            if(grid[0] === 2 && grid[4] === 2 && grid[8] === 2){
                return true
            }
        }
    }
    return false
}

