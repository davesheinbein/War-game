/*----- constants -----*/ 

// Define constants to start game

//  Number of cards in the deck defined
let numOfCardsInDeck = 52; // (52 cards = 1 deck) 104 cards in 2 decks total // consider using only 1 deck

/*----- app's state (variables) -----*/ 

const rank = ['2','3','4','5','6','7','8','9','10','jack','queen','king','ace'];
const value = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const suite = ['hearts','diamonds','spades','clubs']; // Hearts, Diamonds, Spades, Clubs
const points = 5;


/*----- cached element references -----*/ 
let war = 0;
let bonus = 0;
let card = []; // empty card to represent individual car

let playerOneDeck = [];	// empty the deck for a clean slate
let playerOnePnts = 0;
let playerTwoDeck = [];	// empty the deck for a clean slate
let playerTwoPnts = 0;

let playerOneTotal = document.getElementById('player1-card')
let playerTwoTotal = document.getElementById('player2-card')

/*----- event listeners -----*/ 

// document.querySelector('flipButton')addEventListener('click', init)

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


// use the > Fisher-Yates shuffle < to shuffle cards around
let shuffle = function(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
    	var temp = arr[i];
    	arr[i] = arr[j];
    	arr[j] = temp;
	}
	arr = arr;
	return arr;
}
// Splits the deck and assigns 
// the array to both deck 1 or 2
let assignDeck = function(arr){ 
    for(var i = 0; i < (arr.length); i++){
        if (i % 2 === 0) {
            playerOneDeck.push(arr[i]);
        } else {
            playerTwoDeck.push(arr[i]);
        }; 
    };
};	

// Decides who wins based on how many points they have
let winner = function () {
    if (playerOneDeck.length >= 28) {
        return alert("Player One Wins");
	} else if (playerTwoDeck.length >= 28) {
        return alert("Player Two Wins");
	} else {
        return false;
	}
};

// calls the init() function
init();

// defines the init function
function init() { // Starts game attached to button to flip cards
    let shuffleDeck = shuffle(card)
    assignDeck(shuffleDeck) // takes shuffleDeck and spits into two
    render();
}
    
function render() {
    playerTwoTotal.textContent = playerTwoDeck.length
    playerOneTotal.textContent = playerOneDeck.length
    winner();
}

function warGameCheck(){
    // playerOneDeck[war].value
    let valueOne = playerOneDeck.shift()
    let valueTwo = playerTwoDeck.shift()
    if (valueOne.value > valueTwo.value) {
        playerOneDeck.push(valueOne, valueTwo)
        alert('Player 1 Wins round')
    } else if (valueOne.value < valueTwo.value) {
        playerTwoDeck.push(valueOne, valueTwo)
        alert('Player 2 Wins round')
    } else { 
        playerOneDeck.push(valueOne)
        playerTwoDeck.push(valueTwo)
        alert ('Tie')
    }
    console.log(playerOneDeck)
    console.log(playerTwoDeck)
    render();
}


document.querySelector('#flipButton').addEventListener('click', warGameCheck);
// document.querySelector('#player-Imgs').querySelector('player1-result img'); // testing



 // console.log(playerOneDeck.slice(0, 3)) // logs first 3 array in object 
 