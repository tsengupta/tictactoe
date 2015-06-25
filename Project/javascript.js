var a1;
var a2;
var a3;
var b1;
var b2;
var b3;
var c1;
var c2;
var c3;
var xWin = false;
var oWin = false;
var checkWin;
var turn = 0;
var newGame;




checkWin = function () {
    if  
        ((a1 == a2 && a1 == a3 && (a1 == "x")) || 
        (b1 == b2 && b1 == b3 && (b1 == "x")) || 
        (c1 == c2 && c1 == c3 && (c1 == "x")) || 
        (a1 == b1 && a1 == c1 && (a1 == "x")) || 
        (a2 == b2 && a2 == c2 && (a2 == "x")) || 
        (a3 == b3 && a3 == c3 && (a3 == "x")) || 
        (a1 == b2 && a1 == c3 && (a1 == "x")) ||
        (a3 == b2 && a3 == c1 && (a3 == "x")) 
    ) {
        xWin = true;
        alert("X's win!")
    } else if 
    ((a1 == a2 && a1 == a3 && (a1 == "o")) || 
    (b1 == b2 && b1 == b3 && (b1 == "o")) || 
    (c1 == c2 && c1 == c3 && (c1 == "o")) || 
    (a1 == b1 && a1 == c1 && (a1 == "o")) || 
    (a2 == b2 && a2 == c2 && (a2 == "o")) || 
    (a3 == b3 && a3 == c3 && (a3 == "o")) || 
    (a1 == b2 && a1 == c3 && (a1 == "o")) || 
    (a3 == b2 && a3 == c1 && (a3 == "o")) 
    ) {
    
        oWin = true;
        alert("O's win!")
    }
}