/*----- constants -----*/ 

// Define constants to start game

//  Number of cards in the deck defined
let numOfCardsInDeck = 52; // 52 cards = 1 deck

let valueOne;
let valueTwo;

const explosionSound = '/sounds/Tank-Firing.mp3'
const gunCockedSound = 'file:///Users/davidsheinbein/code/Personal-Repo/War-game/sounds/Gun+Cock.mp3'
/*----- app's state (variables) -----*/ 

const rank = ['02','03','04','05','06','07','08','09','10','J','Q','K','A'];
const value = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const suit = ['h','d','s','c']; // Hearts, Diamonds, Spades, Clubs



/*----- cached element references -----*/ 
let card = []; // empty card to represent individual car

let playerOneDeck = [];	// empty the deck for a clean slate
let playerOnePnts = 0;
let playerTwoDeck = [];	// empty the deck for a clean slate
let playerTwoPnts = 0;

// Audio
const bgPlayer = document.getElementById('bg-player');
const bgCheckbox = document.querySelector('input[type="checkbox"]');
// const muteSound = document.querySelector('input[type="checkbox"]');

const player = new Audio();

/*----- event listeners -----*/ 

let playerOneTotal = document.getElementById('playerOneCardTotal')
let playerTwoTotal = document.getElementById('playerTwoCardTotal')

let playerOneCardImg = document.getElementById('playerOneCardImg')
let playerTwoCardImg = document.getElementById('playerTwoCardImg')

let gameActions = document.getElementById('gameActions')

// Audio
bgCheckbox.addEventListener('change', handleBgChanged);
// muteSound.addEventListener('change', muteAll);

/*----- functions -----*/

// Lays each card out within an array
//  Creates an array of numOfCardsInDeck = 52 cards 0-51   
let c = 0; // c = single card
while (c < numOfCardsInDeck) { // while loop 
    // A single card is less than the total number of cards in a deck
    for (let s = 0; s <= 3; s++) { // for loop
        // s is single suit, s = 0 (Js is zero based starts count at 0 when indexing array),
        //      s <= 3 sets array limit to be less than or equal to 3 
        //      s++ incrimentlly add +1 to itterate through numbers in s 
        //      starting at 0 and going up to 3 with a total of 4 items
        for (let rv = 0; rv <= 12; rv++) { // rv is rank and value
            // does same thing as the s for loop but using rv
            // 0 - 12 = 13 items
            card[c] = { // card object includes four properties - suit, rank, value, cssClass
                suit: suit[s], // Diamond, Spades, Hearts, Clubs
                rank: rank[rv], // '02','03','04','05','06','07','08','09','10','J','Q','K','A'
                value: value[rv], // 1,2,3,4,5,6,7,8,9,10,11,12,13
                cssClass: suit[s] + rank[rv]
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
let winner = function () { // creating a function that sets win conditions with the variable winner
    if (playerOneDeck.length >= 30) { // 30 is the number of cards needed in a players hand to wim
        $("#gameText").fadeOut(3000, function() {
            // Animation complete.
          })
          $("#gameText").remove();    
        gameActions.innerHTML = `<div style="display:none" id="gameText">Player 1 wins Game</div>`;
        $("#gameText").fadeIn(1000, function() {
            // Animation complete.
          }) 
    } else if (playerTwoDeck.length >= 30) { // 30 is the number of cards needed in a players hand to wim
        $("#gameText").fadeOut(3000, function() {
            // Animation complete.
          })
          $("#gameText").remove();    
        gameActions.innerHTML = `<div style="display:none" id="gameText">Player 2 wins Game</div>`;
        $("#gameText").fadeIn(1000, function() {
            // Animation complete.
          })
	} else {
        return false;
        $("#gameText").fadeIn(1000, function() {
            // Animation complete.
          })
	}
};

// calls the init() function
init();

// defines the init function
function init() { // Starts game attached to button to flip cards
    playerOneDeck = [], playerTwoDeck = [];
    let shuffleDeck = shuffle(card)
    assignDeck(shuffleDeck) // takes shuffleDeck and spits into two
    render();
}
    
function render() {
    playerTwoTotal.textContent = playerTwoDeck.length
    playerOneTotal.textContent = playerOneDeck.length
    
    valueOne = playerOneDeck.shift()
    valueTwo = playerTwoDeck.shift()

    playerOneCardImg.innerHTML = `<div class="${valueOne.cssClass} card xlarge"></div>`
    playerTwoCardImg.innerHTML = `<div class="${valueTwo.cssClass} card xlarge"></div>`
}

function warGameCheck(){
    // gameActions.innerHTML.fadeOut(1000)
    $("#gameText").fadeOut(5000, function() {
        // Animation complete.
      })
    $("#gameText").remove();
    if (valueOne.value > valueTwo.value) {
        playerOneDeck.push(valueOne, valueTwo)
        gameActions.innerHTML = `<div style="display:none" id="gameText">Player 1 takes card</div>`
        $("#gameText").fadeIn(1000, function() {
            // Animation complete.
          })
    } else if (valueOne.value < valueTwo.value) {
        playerTwoDeck.push(valueOne, valueTwo)
        gameActions.innerHTML = `<div style="display:none" id="gameText">Player 2 takes card</div>`
        $("#gameText").fadeIn(1000, function() {
            // Animation complete.
          })
    } else { 
        playerOneDeck.push(valueOne)
        playerTwoDeck.push(valueTwo)
        gameActions.innerHTML = `<div style="display:none" id="gameText">War!</div>`
        $("#gameText").fadeIn(1000, function() {
            // Animation complete.
          })
    }
    winner();
    render();
}

document.querySelector('#resetButton').addEventListener('click', init); 
document.querySelector('#resetButton').addEventListener('click', playExpSound); 

// Audio selectors & event listeners
document.querySelector('#flipButton').addEventListener('click', warGameCheck);
document.querySelector('#flipButton').addEventListener('click', playGunSound);
// document.querySelector('#mute').addEventListener('change', muteAll);

// Audio
function handleBgChanged() {
    bgCheckbox.checked ? bgPlayer.play() : bgPlayer.pause();
}

function playExpSound() {
    player.src = explosionSound;
    player.play();
}

function playGunSound() {
    player.src = gunCockedSound;
    player.play();
}

// function muteAll() {
//     muteSound.checked ? bgPlayer.muted() : bgPlayer.muted();
// }