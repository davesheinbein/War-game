/*----- constants -----*/ 

// Start the game
// Define constants to start game

// Load 2 decks (52 cards = 1 deck) 104 cards in 2 decks total // consider using only 1 deck
// Create/Find images for 2 decks to shuffle card

class Card { // Sets card parameters for the properties suit and numValues
    constructor(suit, numValue) {
        this.suit = suit;
        this.numValue = numValue;
    }
}

class Deck { // all aespects of the deck
    constructor() {
        this.deck = [];
    }

    createDeck(suits, numValues) {   
        for(let suit of suits) { // sets suit for each idx of the arr suits
            for(let numValue of numValues) { // sets numValue 
                this.deck.push(new Card(suit, numValue));
            }
        }
        return this.deck;
    }

    shuffle() {
        let counter = this.deck.length, tempCounter, iteration;

        while(counter) { // flipping elements in the array below
            iteration = Math.floor(Math.random() * counter--); 
            tempCounter = this.deck[counter];
            this.deck[counter] = this.deck[iteration];
            this.deck[iteration] = tempCounter;
        }
        return this.deck;
    }

    deal(){
        let hand = [];
        while(hand.length < 26) { // deals 26 cards
            hand.push(this.deck.pop());
        }
        return hand;
    }
    
}

let suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts']; // 'spades', 'clubs', 'diamond', 'hearts'
let numValues = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'Jack', 'Queen', 'King', 'Ace']; // Ace is high
let deck = new Deck();

deck.createDeck(suits, numValues); // creates the deck
deck.shuffle();  // shuffles the deck
deck.deal(); // Deals cards
console.log(deck);


// const cardsLookup = {
// 	    player1: {
// 	        playerNo: '1',
// 	        playerDeck: a
// 	    },
// 	    player2: {
// 	        playerNo: '-1',
// 	        playerDeck: b
// 	    },

/*----- app's state (variables) -----*/ 

let scores; // this is the player and computer's number of wins
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


// init();

// function init(){
//     // innitializes state variables
//     scores = {
//         player1Score: 0,
//         player2Score: 0,
//         warScores: (0 === 0) //
//     };
//     results = {
//         player1: 'ranks', // Discuss with Alex or Michael
//         player2: 'ranks' // Discuss with Alex or Michael
//     }
//     winner = null; 'player, tie, computer'
//     // remember to reactivate render vvvv

//     // render() // call in the init
// };


/*----- functions -----*/




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