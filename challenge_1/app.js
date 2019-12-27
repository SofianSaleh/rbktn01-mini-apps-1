var count = 0;
var getId = (id) => {
    var x = document.getElementsByClassName('tile');
    if( count % 2 === 0 ){
        x[id].innerHTML = "X";
        count++;
    }else{
        x[id].innerHTML = "O";
        count++;
    }
}

