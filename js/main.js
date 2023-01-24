/*----- constants -----*/
const colorArray = []; 
const colorButtons = []; 

/*----- state variables -----*/
let board; // array of arrays
// need separate array for the computer's response 
let choices; // array for the player's guesses
let code; // computer's secret code 
let winner; // null = no winner; 1 or - 1 = winner
let turn;
let computerResponse; // array of matches and misses in the player's guess (the "choices" array)

/*----- cashed elements -----*/ 


/*----- event listeners -----*/
//create one event listener for all buttons, connect buttons to colorsArray

/*----- functions -----*/ 
init(); 

function init() {
    board = [
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
    ];

    code = [null, null, null, null];

    choices =  [null, null, null, null];

    computerResponse = [null, null, null, null];

    winner = null;
    turn = 0;

    render(); 
};

function render() {
    renderBoard();
    renderMessage();
    renderControls();  
}; 

//secretCode(); 
//checkWin();

