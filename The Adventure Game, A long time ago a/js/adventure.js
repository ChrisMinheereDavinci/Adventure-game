
var button1 = document.getElementById('buttonOne');
var button2 = document.getElementById('buttonTwo');
var button3 = document.getElementById('buttonThree');
var titleGameOver = document.getElementById('title');

var inventory = { 'Sleutel': false }


function itemSleutel() {
    inventory['Sleutel'] = true;
    document.getElementById('inventoryItem').style.display = 'none';
}


// ----------Starts the Game---------//
startGame();

function startGame() {
    button2.style.display = "none";
    button3.style.display = "none";
    button1.innerHTML = 'Start Game';
    button1.onclick = levelOne;

}

//-------------level One-------------//
function levelOne() {
    button1.classList.add('l1b1');
    button2.classList.add('l1b2');
    button3.classList.add('l1b3');
    button2.style.display = "inline-block";
    button3.style.display = "inline-block";
    title.innerHTML = 'Level 1';
    description.innerText = '#1. \n 2 audio kanalen noem je stereo. \n Hoe noem je 1 audio kanaal?';
    description.classList.add('descriptioncssLevelOne');
    button1.innerHTML = 'Game Over';
    button2.innerHTML = 'Test';
    button3.innerHTML = 'Game Over';
    button1.onclick = levelGameOver;
    button2.onclick = levelTwo;
    button3.onclick = levelGameOver;
}

//-------------level Two-------------//
function levelTwo() {
    button1.classList.add('l2b1');
    button2.classList.add('l2b2');
    button3.classList.add('l2b3');
    button2.style.display = "inline-block";
    button3.style.display = "inline-block";
    title.innerHTML = 'Level 2';
    description.classList.add('descriptioncssLevelTwo');
    description.innerHTML = '#2. \n Hoe wordt de batterij genoemd in een horloge?';

    button1.innerHTML = 'Game Over';
    button2.innerHTML = 'Game Over';
    button3.innerHTML = 'Test';
    button1.onclick = levelGameOver;
    button2.onclick = levelGameOver;
    button3.onclick = levelThree;
}

//-------------level Three-------------//
function levelThree() {
    button1.classList.add('l3b1');
    button2.classList.add('l3b2');
    button3.classList.add('l3b3');
    button2.style.display = "inline-block";
    button3.style.display = "inline-block";
    inventoryItem.src = "img/sleutel.png";
    inventoryItem.style.display = 'inline-block';
    title.innerHTML = 'Level 3';
    description.innerHTML = 'dit is level 3 ofzo';
    button1.innerHTML = 'Test';
    button2.innerHTML = 'Game Over';
    button3.innerHTML = 'Game Over';
    button1.onclick = levelFour;
    button2.onclick = levelGameOver;
    button3.onclick = levelGameOver;
    inventoryItem.onclick = item;
}


//-------------level four-------------//
function levelFour() {
    button1.classList.add('l4b1');
    button2.classList.add('l4b2');
    button3.classList.add('l4b3');
    button2.style.display = "inline-block";
    button3.style.display = "inline-block";
    title.innerHTML = 'Level 4';
    description.innerHTML = 'dit is level 4 ofzo';
    button1.innerHTML = 'Game Over';
    button2.innerHTML = 'Game Over';
    button3.innerHTML = 'Test';

    if (inventory['Sleutel'] == true) {
        button3.onclick = levelWelDone;
    }
    else {
        button2.onclick = levelGameOver;
        button1.onclick = levelGameOver;
    }


}

//-------------GAME OVER-------------//
function levelGameOver() {
    titleGameOver.classList.add('gameOver');

    button2.style.display = "inline-block";
    button3.style.display = "inline-block";
    titleGameOver.innerHTML = 'GAME OVER!';
    description.classList.add('descriptioncssgameOver');
    description.innerHTML = 'oeps dat was niet het juiste andwoord';
    button1.innerHTML = 'Ga Terug';
    button1.onclick = levelThree;
    button2.style.display = "none";
    button3.style.display = "none";
}

//-------------Win-------------//
function levelWelDone(){
    titleGameOver.classList.add('levelWin');

    button2.style.display = "inline-block";
    button3.style.display = "inline-block";
    titleGameOver.innerHTML = 'Wel Done';
    description.classList.add('descriptioncssWelDone');
    description.innerHTML = 'oeps dat was niet het juiste andwoord';
    button1.innerHTML = 'Ga Terug';
    button1.onclick = levelThree;
    button2.style.display = "none";
    button3.style.display = "none";
}