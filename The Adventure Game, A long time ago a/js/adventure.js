// Created by: Chris Minheere
// Date: 05-12-2018


//------------all variables-----------//
var button1 = document.getElementById('buttonOne');
var button2 = document.getElementById('buttonTwo');
var button3 = document.getElementById('buttonThree');
var titleGameOver = document.getElementById('title');
var inventory = { 'Sleutel': false }


//----------inventory handler---------//
function itemSleutel() {
    inventory['Sleutel'] = true;
    document.getElementById('inventoryItem').style.display = 'none';
}

function reloadGame() {

    location.reload();
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
    // button1.classList.add('l1b1');   is only used if the buttons have to be moved
    // button2.classList.add('l1b2');
    // button3.classList.add('l1b3');
    button2.style.display = "inline-block";
    button3.style.display = "inline-block";
    title.innerHTML = 'Level 1';
    description.innerText = '393 + 89 = A. 487  B. 482 C. 428';
    description.classList.add('descriptioncssLevelOne');
    button1.innerHTML = 'A';
    button2.innerHTML = 'B.';
    button3.innerHTML = 'C';
    button1.onclick = levelGameOver;
    button2.onclick = levelTwo;
    button3.onclick = levelGameOver;
}

//-------------level Two-------------//
function levelTwo() {
    // button1.classList.add('l2b1');   is only used if the buttons have to be moved
    // button2.classList.add('l2b2');
    // button3.classList.add('l2b3');
    button2.style.display = "inline-block";
    button3.style.display = "inline-block";
    title.innerHTML = 'Level 2';
    description.classList.add('descriptioncssLevelTwo');
    description.innerHTML = '67 x 10 – 67 = A. 602 B.585  C. 603';
    button1.innerHTML = 'A';
    button2.innerHTML = 'B';
    button3.innerHTML = 'C.';
    button1.onclick = levelGameOver;
    button2.onclick = levelGameOver;
    button3.onclick = levelThree;
}

//-------------level Three-------------//
function levelThree() {
    // button1.classList.add('l3b1');   is only used if the buttons have to be moved
    // button2.classList.add('l3b2');
    // button3.classList.add('l3b3');
    button2.style.display = "inline-block";
    button3.style.display = "inline-block";
    inventoryItem.src = "img/prof.png";
    inventoryItem.style.display = 'inline-block';
    title.innerHTML = 'Level 3';
    description.classList.add('descriptioncssLevelThree');
    description.innerHTML = '4 × (3 + 2) = A. 20 B. 14 C. 18';
    button1.innerHTML = 'A.';
    button2.innerHTML = 'B';
    button3.innerHTML = 'C';
    button1.onclick = levelFour;
    button2.onclick = levelGameOver;
    button3.onclick = levelGameOver;
    inventoryItem.onclick = itemSleutel;
}

//-------------level Four-------------//
function levelFour() {
    // button1.classList.add('l3b1');   is only used if the buttons have to be moved
    // button2.classList.add('l3b2');
    // button3.classList.add('l3b3');
    button2.style.display = "inline-block";
    button3.style.display = "inline-block";
    inventoryItem.src = "img/prof.png";
    inventoryItem.style.display = 'none';
    title.innerHTML = 'Level 4';
    description.classList.add('descriptioncssLevelFour');
    description.innerHTML = '32 + 5 =  A. 35  B. 42 C. 37';
    button1.innerHTML = 'A';
    button2.innerHTML = 'B';
    button3.innerHTML = 'C.';
    button1.onclick = levelGameOver;
    button2.onclick = levelGameOver;
    button3.onclick = levelFive;
    inventoryItem.onclick = itemSleutel;
}

//-------------level Five-------------//
function levelFive() {
    // button1.classList.add('l3b1');   is only used if the buttons have to be moved
    // button2.classList.add('l3b2');
    // button3.classList.add('l3b3');
    button2.style.display = "inline-block";
    button3.style.display = "inline-block";
    inventoryItem.src = "img/prof.png";
    inventoryItem.style.display = 'none';
    title.innerHTML = 'Level 5';
    description.classList.add('descriptioncssLevelFive');
    description.innerHTML = '4 × 5 ÷ 2 + 7 =  A. 20  B. 10 C. 17';
    button1.innerHTML = 'A';
    button2.innerHTML = 'B';
    button3.innerHTML = 'C.';
    button1.onclick = levelGameOver;
    button2.onclick = levelGameOver;
    button3.onclick = levelSix;
    inventoryItem.onclick = itemSleutel;
}

//-------------level Six-------------//
function levelSix() {
    // button1.classList.add('l3b1');   is only used if the buttons have to be moved
    // button2.classList.add('l3b2');
    // button3.classList.add('l3b3');
    button2.style.display = "inline-block";
    button3.style.display = "inline-block";
    inventoryItem.src = "img/prof.png";
    inventoryItem.style.display = 'none';
    title.innerHTML = 'Level 6';
    description.classList.add('descriptioncssLevelSix');
    description.innerHTML = '4 + 6 - 7 + 3 = A. 5  B. 13 C. 6';
    button1.innerHTML = 'A';
    button2.innerHTML = 'B';
    button3.innerHTML = 'C.';
    button1.onclick = levelGameOver;
    button2.onclick = levelGameOver;
    button3.onclick = levelSeven;
    inventoryItem.onclick = itemSleutel;
}

//-------------level Seven-------------//
function levelSeven() {
    // button1.classList.add('l3b1');   is only used if the buttons have to be moved
    // button2.classList.add('l3b2');
    // button3.classList.add('l3b3');
    button2.style.display = "inline-block";
    button3.style.display = "inline-block";
    inventoryItem.src = "img/prof.png";

    if (inventory['Sleutel'] == true) {
        inventoryItem.style.display = 'none';
    }
    else {
        inventoryItem.style.display = 'inline-block';
    }

    title.innerHTML = 'Level 7';
    description.classList.add('descriptioncssLevelSeven');
    description.innerHTML = 'Mr. Jones sold two pipes at $1.20 each.\n Based on the cost, his profit one was 20% and his loss on the other was 20%.\n On the sale of the pipes, he:\nA broke even, B lost 4 cents, C gained 4 cents.'
    button1.innerHTML = 'A.';
    button2.innerHTML = 'B';
    button3.innerHTML = 'C';
    button1.onclick = levelEight;
    button2.onclick = levelGameOver;
    button3.onclick = levelGameOver;

    inventoryItem.onclick = itemSleutel;
}

//-------------level Eight-------------//
function levelEight() {
    // button1.classList.add('l3b1');   is only used if the buttons have to be moved
    // button2.classList.add('l3b2');
    // button3.classList.add('l3b3');
    button2.style.display = "inline-block";
    button3.style.display = "inline-block";
    inventoryItem.src = "img/prof.png";
    inventoryItem.style.display = 'none';
    title.innerHTML = 'Level 8';
    description.classList.add('descriptioncssLevelEight');
    description.innerHTML = 'Jones covered a distance of 50 miles on his first trip.\nOn a later trip he traveled 300 miles while going three times as fast.\nHis new time compared with the old time was:\nA three times as much, B The same , C twice as much';
    button1.innerHTML = 'A';
    button2.innerHTML = 'B';
    button3.innerHTML = 'C';
    button1.onclick = levelGameOver;
    button2.onclick = levelNine;
    button3.onclick = levelGameOver;
    inventoryItem.onclick = itemSleutel;
}

//-------------level Nine-------------//
function levelNine() {
    // button1.classList.add('l3b1');   is only used if the buttons have to be moved
    // button2.classList.add('l3b2');
    // button3.classList.add('l3b3');
    button2.style.display = "inline-block";
    button3.style.display = "inline-block";
    inventoryItem.src = "img/prof.png";
    inventoryItem.style.display = 'none';
    title.innerHTML = 'Level 9';
    description.classList.add('descriptioncssLevelNine');
    description.innerHTML = '20 % of 2 is equal to: A.20  B.4  C.0.4 ';
    button1.innerHTML = 'A';
    button2.innerHTML = 'B';
    button3.innerHTML = 'C';
    button1.onclick = levelGameOver;
    button2.onclick = levelGameOver;
    button3.onclick = levelTen;
    inventoryItem.onclick = itemSleutel;
}


//-------------level Ten-------------//
function levelTen() {
    // button1.classList.add('l4b1');   is only used if the buttons have to be moved
    // button2.classList.add('l4b2');
    // button3.classList.add('l4b3');
    inventoryItem.style.display = 'none';
    button2.style.display = "inline-block";
    button3.style.display = "inline-block";
    title.innerHTML = 'Level 10';
    description.classList.add('descriptioncssLevelTen');
    description.innerHTML = 'The population of a country increased by an average of 2% per year from 2000 to 2003.\n If the population of this country was 2 000 000 on December 31, 2003, \nthen the population of this country on January 1, 2000, \nto the nearest thousand would have been\nA.1 846 000  B.1 852 000  C.1 000 000';
    button1.innerHTML = 'A';
    button2.innerHTML = 'B';
    button3.innerHTML = 'C';

    if (inventory['Sleutel'] == true) {
        button1.onclick = levelWelDone;
        button2.onclick = levelWelDone;
        button3.onclick = levelWelDone;
    }
    else {
        button1.onclick = levelGameOver;
        button2.onclick = levelGameOver;
        button3.onclick = levelGameOver;
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
    //button1.onclick = reloadGame(); 
    button2.style.display = "none";
    button3.style.display = "none";
}

//-------------Win-------------//
function levelWelDone() {
    titleGameOver.classList.add('levelWin');
    button2.style.display = "inline-block";
    button3.style.display = "inline-block";
    titleGameOver.innerHTML = 'Wel Done';
    description.classList.add('descriptioncssWelDone');
    description.innerHTML = 'Jaa het is gelukt! Nu kan Professor Cor weer verder met zijn werk. bedankt voor het speelen.';
    button1.innerHTML = 'Ga Terug';
    //button1.onclick = reloadGame(); 
    button2.style.display = "none";
    button3.style.display = "none";
}