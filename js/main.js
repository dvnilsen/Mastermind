/*----- constants -----*/
const COLORS = ["blue", "green", "yellow", "red", "white", "black"];

/*----- state variables -----*/
let board; // array of arrays
// need separate array for the computer's response 
let code; // computer's secret code 
let winner; // null = no winner; 1 or - 1 = winner
let turn;
let computerResponse; // array of matches and misses in the player's guess (the "choices" array)
let currentColor;

/*----- cashed elements -----*/ 
const choiceBtns = document.getElementById("choices");
const colorBtns = document.getElementById("colors");

const inputs = document.getElementsByClassName("input-container");
const responses = document.getElementsByClassName("response");

/*----- event listeners -----*/
    // need listeners on each color button to fill board array
choiceBtns.addEventListener("click", choiceHandler);
colorBtns.addEventListener("click", colorHandler);

/*----- functions -----*/ 
init(); 

function init() {
    board = [null, null, null, null];

    code = secretCode();
    //console.log(code); 
    computerResponse = [];

    winner = null;
    turn = 0;
    currentColor = "blue";

    render(); 
};

function render() {
    renderBoard();
    //renderResponse();
    //renderControls();  
}; 

function secretCode() {
    let tempArray = [];
    while(tempArray.length !== 4) {
        tempArray.push(COLORS[Math.floor(Math.random()*COLORS.length)])
    }
    return tempArray;
}; 

function choiceHandler(evt) {
    if(evt.target.tagName !== "DIV") return;
    board[parseInt(evt.target.id)] = currentColor;
    render();
}

function colorHandler(evt) {
    if(evt.target.tagName !== "DIV") return;
    //console.log(currentColor);
    //console.log(evt.target.id);
    currentColor = evt.target.id; 
    //console.log(currentColor)
    render(); 
}

function renderBoard() {
    board.forEach(function(cellVal, cellIdx) {
        
    });
}

//checkWin();

