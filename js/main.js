/*----- constants -----*/ 

// Define constants to start game

//  Number of cards in the deck defined
numOfCardsInDeck = 52; // (52 cards = 1 deck) 104 cards in 2 decks total // consider using only 1 deck

// First player to reach 5 points wins
totalPoints = 5;

numOfCardsFlippedWar = 3;
numOfCardsFlippedRegularly = 1;

// Create/Find images for 2 decks to shuffle card





/*----- app's state (variables) -----*/ 

card = {
    id: 0,
    value: 0,
    rank: '',
    suite: '',
    image url: '',
    cssId: '',
    owner: null
}


/*----- cached element references -----*/ 

let fullDeck = []; // array of card objects




/*----- event listeners -----*/ 




/*----- functions -----*/

function initializeDeck(deck) {
    let deck = [];	// empty the deck for a clean slate

	let card = {};
	const rank = ['2','3','4','5','6','7','8','9','10','jack','queen','king','ace'];
	const value = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    const suite = ['h','d','s','c']; // Hearts, Diamonds, Spades, Clubs
    
    let c = 1; // single card
    while (c <= numOfCardsInDeck) {
        for (let s = 0; s <= 3; s++) { // s is single suit
            for (let rv = 0; rv <= 12; rv++) { // rv is rank and value
                card[c] = {
                    id: c,
                    value: value[rv],
                    rank: rank[rv],
                    suite: suite[s],
                    image url: '',
                    cssId: '',
                    owner: null
                }
                deck.push(card[c]); // insert card into the fullDeck array
                c++;
            }
        }
    }
}

function  


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