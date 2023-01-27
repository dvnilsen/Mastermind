/*----- constants -----*/
const COLORS = ["blue", "green", "yellow", "red", "white", "orange"];

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
const compMessage = document.getElementById("compMessage"); 
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");

/*----- event listeners -----*/
choiceBtns.addEventListener("click", choiceHandler);
colorBtns.addEventListener("click", colorHandler);
submitBtn.addEventListener("click", renderSubmit);
resetBtn.addEventListener("click", renderReset);


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
    compMessage.innerText = "Input your colors on the board and press Submit..."
    
};

// Render the current colors on the board spaces and computer response spaces
// Render current gameplay status message
function render() {
    renderBoard(); 
}; 

// Render the color choice assigned to each space on the board 
function renderBoard() {
    board.forEach(function(colorEl, colorIdx) {
       if (colorEl){
           document.getElementById(`c${colorIdx}r${turn}`).style.backgroundColor = `${colorEl}`;
       }
   });
   computerResponse.forEach(function (colorEl, colorIdx) {
       if (colorEl){
           document.getElementById(`p${turn}c${colorIdx}`).style.backgroundColor = `${colorEl}`;
       }
   });
}

// Update the gameplay status message 
function renderMessage() {
   if(winner === 1) { 
       compMessage.innerText = "Congratulations! You broke the code!  Now at DEFCON 5.";
   } else if(winner === -1) { 
       compMessage.innerText = "I'm sorry, you lost the game. Now at DEFCON 1. Launching nuclear missles..."
   } else { 
       compMessage.innerText = "Incorrect guess. Please guess again..."
   }
}

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
    if(turn === 10) return; 
    currentColor = evt.target.id; 
}

// Assign current color choice to corresponding space on the board on button click
function choiceHandler(evt) {
    if(evt.target.tagName !== "DIV") return;
    if(turn === 10) return; 
    if(winner === 1) return; 
    board[parseInt(evt.target.id)] = currentColor;
    renderBoard();
}

// Render computer response colors, check for winning condition, and update gameplay status message 
function renderSubmit() {
    if(board.includes(null)) return; 
    if(turn === 10) return; 
    if(winner === 1) return; 
    checkWin();
    renderMessage();
    render();
    nextTurn();
    console.log(turn); 
    console.log(code);
}

// Compare player guess array and code array for perfect match, update winner status accordingly 
function checkWin() {
    let tempCode = code.map(color => color);
    let tempBoard = board.map(color => color);
    tempBoard.forEach(function(colorEl, colorIdx) {
        if (colorEl === tempCode[colorIdx]) {
            computerResponse.push("red");
            tempCode[colorIdx] = -1;
            tempBoard[colorIdx] = 1;
        }
    })
    tempBoard.forEach(function (colorEl, colorIdx) {
        if (tempCode.includes(colorEl)) {
            computerResponse.push("yellow")
            tempBoard[colorIdx] = 1;
            let newIdx = tempCode.indexOf(colorEl)
            tempCode[newIdx] = -1; 
        }
    })
    if(computerResponse.every(color => color === "red") && (computerResponse.length === 4)) {
        winner = 1;
    } else if (winner === null && turn === 9) {
        winner = -1;
    } else return; 
    console.log(winner);
};

// Update player guess array and computer response array to empty and increment the turn count 
function nextTurn() {
    board = board.map((cell) => null);
    computerResponse = [];
    turn++; 
};

// Reset all game spaces to blank and call the init function
function renderReset() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 10; j++) {
            document.getElementById(`c${i}r${j}`).style.backgroundColor = "transparent";
        }
    };

    init(); 
}; 


