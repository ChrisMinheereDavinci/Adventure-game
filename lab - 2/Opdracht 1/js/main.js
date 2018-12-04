var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");


var teller = [0,0,0];


function buttonOne() {
    button1.innerHTML = ++teller[0] ;
    document.getElementById("picOne").src = "img/1.jpg";
    document.getElementById("container").style.backgroundImage = "url('img/bg1.jpg')";
}

function buttonTwo() {
    button2.innerHTML = ++teller[1] ;
    document.getElementById("picOne").src = "img/2.jpg";
    document.getElementById("container").style.backgroundImage = "url('img/bg2.jpg')";
}

function buttonTree() {
    button3.innerHTML = ++teller[2] ;
    document.getElementById("picOne").src = "img/3.jpg";
    document.getElementById("container").style.backgroundImage = "url('img/bg3.jpg')";
}