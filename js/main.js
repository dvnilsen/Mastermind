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

/*----- event listeners -----*/
    // need listeners on each color button to fill board array
choiceBtns.addEventListener("click", choiceHandler);

/*----- functions -----*/ 
init(); 

function init() {
    board = [null, null, null, null];

    code = secretCode();
    console.log(code); 
    computerResponse = [];

    winner = null;
    turn = 0;
    currentColor = "red";

    render(); 
};

function render() {
    //renderBoard();
    //renderMessage();
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

//checkWin();

