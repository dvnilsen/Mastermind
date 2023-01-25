/*----- constants -----*/
const COLORS = ["blue", "green", "yellow", "red", "white", "black"];

/*----- state variables -----*/
let board; // array for player's choices each turn
let code; // computer's secret code 
let winner; // null = no winner yet; 1 or - 1 = winner
let turn; // current turn number
let computerResponse; // array 
let currentColor; // player's color choice to place on a board space

/*----- cashed elements -----*/ 
const choiceBtns = document.getElementById("choices");
const colorBtns = document.getElementById("colors");
const inputs = document.getElementsByClassName("input-container");
const responses = document.getElementsByClassName("response");
const compMessage = document.querySelector("h2"); 
const submitBtn = document.getElementById("submitBtn");

/*----- event listeners -----*/
choiceBtns.addEventListener("click", choiceHandler);
colorBtns.addEventListener("click", colorHandler);
submitBtn.addEventListener("click", renderSubmit);

/*----- functions -----*/ 
init(); 

// Initialize main game state and render all current statuses 
function init() {
    board = [null, null, null, null];
    code = secretCode();
    computerResponse = [];
    winner = null;
    turn = 0;
    currentColor = "blue";

    render(); 
};

// Render the colors on the board spaces and computer response spaces
// Render gameplay status message
// Check for winning conditions and update game states
function render() {
    renderBoard();
    renderMessage();
    renderSubmit();  
}; 

// Generate random set of colors to create the initial code array
function secretCode() {
    let tempArray = [];
    while(tempArray.length !== 4) {
        tempArray.push(COLORS[Math.floor(Math.random()*COLORS.length)])
    }
    return tempArray;
}; 

// Update current color choice on button click
function colorHandler(evt) {
    if(evt.target.tagName !== "DIV") return;
    currentColor = evt.target.id; 
    render(); 
}

// Assign current color choice to corresponding space on the board on button click
function choiceHandler(evt) {
    if(evt.target.tagName !== "DIV") return;
    board[parseInt(evt.target.id)] = currentColor;
    render();
}

// Render the color choice assigned to each space on the board 
function renderBoard() {
     board.forEach(function(colorEl, colorIdx) {
        if (colorEl){
            document.getElementById(`c${colorIdx}r${turn}`).style.backgroundColor = `${colorEl}`;
        }
    });
}

// Render computer response colors, check for winning condition, and update gameplay status message 
function renderSubmit() {
    // ON BUTTON CLICK 
    // Check for winning condition

}

// Update the gameplay status message 
function renderMessage() {
    if(winner === true) { // player made a winning guess - player wins

    } else if(winner === false && turn < 9) { // guess is wrong but turns < 10 - guess again

    } else { // guess is wrong and turns === 10 - player loses 

    }
}

//nextTurn();
//checkWin();

