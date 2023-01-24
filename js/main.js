/*----- constants -----*/
const colorsArray = []; 

/*----- state variables -----*/
let board; // array of arrays
// need separate array for the computer's response 

let winner; // null = no winner; 1 or - 1 = winner
let turn;

// arrays to store guesses and responses for each turn
let playerGuess = [];
let computerResponse = []; 

/*----- cashed elements -----*/ 


/*----- event listeners -----*/
//create one event listener for all buttons, connect buttons to colorsArray

/*----- functions -----*/ 

init();
render(); 
secretCode(); 
checkWin();

