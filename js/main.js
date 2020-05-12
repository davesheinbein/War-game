/*----- constants -----*/ 

// Define constants to start game

//  Number of cards in the deck defined
let numOfCardsInDeck = 52; // 52 cards = 1 deck

let valueOne;
let valueTwo;

/*----- app's state (variables) -----*/ 

const rank = ['02','03','04','05','06','07','08','09','10','J','Q','K','A'];
const value = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const suite = ['h','d','s','c']; // Hearts, Diamonds, Spades, Clubs



/*----- cached element references -----*/ 
let card = []; // empty card to represent individual car

let playerOneDeck = [];	// empty the deck for a clean slate
let playerOnePnts = 0;
let playerTwoDeck = [];	// empty the deck for a clean slate
let playerTwoPnts = 0;



/*----- event listeners -----*/ 

let playerOneTotal = document.getElementById('playerOneCardTotal')
let playerTwoTotal = document.getElementById('playerTwoCardTotal')

let playerOneCardImg = document.getElementById('playerOneCardImg')
let playerTwoCardImg = document.getElementById('playerTwoCardImg')

let gameActions = document.getElementById('gameActions')

/*----- functions -----*/

// Lays each card out within an array
//  Creates an array of numOfCardsInDeck = 52 cards 0-51   
let c = 0; // single card
while (c < numOfCardsInDeck) {
    for (let s = 0; s <= 3; s++) { // s is single suit
        for (let rv = 0; rv <= 12; rv++) { // rv is rank and value
            card[c] = {
                suite: suite[s],
                rank: rank[rv],
                value: value[rv],
                cssClass: suite[s] + rank[rv]
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

// Decides who wins based on how many cards they have in their hand
let winner = function () {
    if (playerOneDeck.length >= 30) { // 30 is the number of cards needed in a players hand to wim
        return alert("Player One Wins");
	} else if (playerTwoDeck.length >= 30) { // 30 is the number of cards needed in a players hand to wim
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
    // render();
}
    
function render() {
    playerTwoTotal.textContent = playerTwoDeck.length
    playerOneTotal.textContent = playerOneDeck.length

    console.log(playerOneCardImg)
    console.log(playerTwoCardImg)

    playerOneCardImg.innerHTML = `<div class="${valueOne.cssClass} card xlarge"></div>`
    playerTwoCardImg.innerHTML = `<div class="${valueTwo.cssClass} card xlarge"></div>`
    winner();
}

function warGameCheck(){
    valueOne = playerOneDeck.shift()
    valueTwo = playerTwoDeck.shift()
    if (valueOne.value > valueTwo.value) {
        playerOneDeck.push(valueOne, valueTwo)
        gameActions.innerHTML = `<div id="${gameActions}">Player 1 wins round</div>`
        // alert('Player 1 Wins round')
    } else if (valueOne.value < valueTwo.value) {
        playerTwoDeck.push(valueOne, valueTwo)
        gameActions.innerHTML = `<div id="${gameActions}">Player 2 wins round</div>`
        // alert('Player 2 Wins round')
    } else { 
        playerOneDeck.push(valueOne)
        playerTwoDeck.push(valueTwo)
        gameActions.innerHTML = `<div id="${gameActions}">War!</div>`
        // alert ('Tie')
    }
    console.log(playerOneDeck)
    console.log(playerTwoDeck)
    render();
}


document.querySelector('#flipButton').addEventListener('click', warGameCheck);
document.querySelector('#resetButton').addEventListener('click', init); 