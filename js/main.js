/*----- constants -----*/ 

// Define constants to start game

//  Number of cards in the deck defined
numOfCardsInDeck = 52; // (52 cards = 1 deck) 104 cards in 2 decks total // consider using only 1 deck

numOfCardsFlippedWar = 3;
numOfCardsFlippedRegularly = 1;

/*----- app's state (variables) -----*/ 

const rank = ['2','3','4','5','6','7','8','9','10','jack','queen','king','ace'];
const value = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const suite = ['hearts','diamonds','spades','clubs']; // Hearts, Diamonds, Spades, Clubs


/*----- cached element references -----*/ 
let war = 0;
let card = []; // empty card to represent individual car

let playerOneDeck = [];	// empty the deck for a clean slate
let playerOnePnts = 0;
let playerTwoDeck = [];	// empty the deck for a clean slate
let playerTwoPnts = 0;

/*----- event listeners -----*/ 



/*----- functions -----*/

//  Creates an array of numOfCardsInDeck = 52 cards 0-52   
let c = 0; // single card
while (c < numOfCardsInDeck) {
    for (let s = 0; s <= 3; s++) { // s is single suit
        for (let rv = 0; rv <= 12; rv++) { // rv is rank and value
            card[c] = {
                suite: suite[s],
                rank: rank[rv],
                value: value[rv],
                img: 'card-deck-css/images' + rank[rv] + '_of_' + suite[s] + '.svg',
            }
            c++;
        }
    }
}

// Splits the deck and assigns 
// the array to both deck 1 or 2
let assignDeck = function(array){ 
    for(var i = 0; i < (array.length); i++){
        if (i % 2 === 0) {
            playerOneDeck.push(array[i]);
		} else {
            playerTwoDeck.push(array[i]);
		}; 
    };
};	
console.log(assignDeck.length);

// use the > Fisher-Yates shuffle < to shuffle cards around
let shuffle = function(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
    	var temp = array[i];
    	array[i] = array[j];
    	array[j] = temp;
	}
	array = array;
	return array;
}

// Decides who wins based on how many points they have
let winner = function (playerOnePnts, playerTwoPnts) {
    if (playerOnePnts >= 5) {
        return alert("Player One Wins");
	} else if (playerTwoPnts >= 5) {
        return alert("Player Two Wins");
	} else {
        return false;
	}
};

// calls the init() function
init();

// defines the init function
function init() {
    let shuffleDeck = shuffle(card)
    console.log(shuffleDeck)
    console.log(playerOneDeck)
    assignDeck().push(playerOneDeck)
    console.log(playerOneDeck)

    while (playerOneDeck[war].value === playerTwoDeck[war].value) {
        war += 2;
        alert('War');
    };
    if (playerOneDeck[war].value > playerTwoDeck[war].value) {
        playerOnePnts++;
    } else {
        playerTwoPnts++;
    };
};

document.querySelector('#flipButton').addEventListener('click', init);