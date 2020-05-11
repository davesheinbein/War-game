/*----- constants -----*/ 

// Define constants to start game

//  Number of cards in the deck defined
numOfCardsInDeck = 52; // (52 cards = 1 deck) 104 cards in 2 decks total // consider using only 1 deck

numOfCardsFlippedWar = 3;
numOfCardsFlippedRegularly = 1;

/*----- app's state (variables) -----*/ 



/*----- cached element references -----*/ 

let card = {};
const rank = ['2','3','4','5','6','7','8','9','10','jack','queen','king','ace'];
const value = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const suite = ['hearts','diamonds','spades','clubs']; // Hearts, Diamonds, Spades, Clubs

let playerOneDeck = [];	// empty the deck for a clean slate
let playerOnePnts = 0;
let playerTwoDeck = [];	// empty the deck for a clean slate
let playerTwoPnts = 0;

/*----- event listeners -----*/ 




/*----- functions -----*/

    
let c = 0; // single card
while (c < numOfCardsInDeck) {
    for (let s = 0; s <= 3; s++) { // s is single suit
        for (let rv = 0; rv <= 12; rv++) { // rv is rank and value
            card[c] = {
                id: c,
                suite: suite[s],
                rank: rank[rv],
                value: value[rv],
                img: 'card-deck-css/images' + rank[rv] + '_of_' suite[s] + '.svg',
            }
            c++;
        }
    }

}

function shuffleCards(array) {
	for (var i = array.length - 1; i > 0; i--) {
    	var j = Math.floor(Math.random() * (i + 1));
    	var temp = array[i];
    	array[i] = array[j];
    	array[j] = temp;
	}
	return array;
};

console.log(array);