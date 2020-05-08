/*----- constants -----*/ 

// Start the game
// Define constants to start game

// Load 2 decks (52 cards = 1 deck) 104 cards in 2 decks total // consider using only 1 deck
// Create/Find images for 2 decks to shuffle card

let suits = ['S', 'C', 'D', 'H']; // 'spades', 'clubs', 'diamond', 'hearts'
let ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
let deck = []

// Might use below confirm with Alex/Michael vvvv

// const cardsLookup = {
//     player1: {
//         playerNo: '1';
//         suits: ['spades', 'clubs', 'diamond', 'hearts'];
//         ranks: ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
//         deck: 52
//     },
//     player2: {
//         playerNo: '-1';
//         suits: ['spades', 'clubs', 'diamond', 'hearts'];
//         ranks: ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
//         deck: 52
//     },
//     totalCards: {
//         deck: `${player1.deck} + ${player2.deck}`
//     }
// };

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


/*----- app's state (variables) -----*/ 


let scores; // this is the player and computer's scores, and number of ties
let results; // this is the player and computer's results
let winner; // who was the winner


/*----- cached element references -----*/ 

// Prompt users to play (two players -1, 1. No tie game require)

const scoreElemenets = {
    player1: document.querySelector('#player1-score'),
    player2: document.querySelector('#player2-score')
};
const resultsElements = {
    player1: document.querySelector('#player1-result img'),
    player2: document.querySelector('#player2-result img')
    
};
// Add back in once you know what to put vvv

// winner = // 104 cards
// }


/*----- event listeners -----*/ 

init()

function init(){
    // innitializes state variables
    scores = {
        player1: 0,
        war: 0,
        player2: 0
    };
    results = {
        player1: 'ranks', // Discuss with Alex or Michael
        player2: 'ranks' // Discuss with Alex or Michael
    }
    winner = null; 'player, tie, computer'
    // remember to reactivate render vvvv

    // render() // call in the init
};

/*----- functions -----*/

for (let suitCounter = 0; suitCounter <4; suitCounter++) {
    for (let rankCounter = 0; rankCounter < 13; rankCounter++) {
        deck.push(ranks[rankCounter] + suits[suitCounter]);
    }
}
console.log(deck);

// Create a while loop with an endloop conditional statement that stop doesn’t equal to zero


// Create if statement
// 	If Value 1 > Value 1
// 	Player one wins hand! Is printed
// 	Adds cards to deck 1
// 	Displays figure with imgshow


// Create else if statement - Deck 1
// 	Elseif Value 2 > Value 1
// 	Player two wins hand! Is printed
// 	Adds cards to deck 2
// 	Displays figure with imgshow

// Create else if statement - Deck 2


// Create else if statement - Deck 1 == Deck 1
// 	Value1==Value2
// 	War is printed
// 	Goes back through the previous if elseif to determine who wins the war
// 	Displays figure with imgshow

// End

// Go to next card
// 	use x = x + 1


// Create show deck length for player 1 and player 2
// Print display how many cards each player 1 and player 2 has


// Use if else statement to show if player 1 has all 104 cards print “player 1 wins” else if player 2 has all 104 cards print “player 2 wins”


// If player 1 or player 2 has 0 cards then the loop ends 
// Print player 1 or player 2 wins when loop reaches zero