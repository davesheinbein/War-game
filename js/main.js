/*----- constants -----*/ 

// Define constants to start game

//  Number of cards in the deck defined
const numOfCardsInDeck = 52; // 52 cards = 1 deck

const explosionSound = 'sounds/Tank-Firing.mp3' 
// set variable explosionSound to sound mp3
const gunCockedSound = 'sounds/Gun+Cock.mp3' 
// set variable gunCockedSound to sound mp3

const rank = ['02','03','04','05','06','07','08','09','10','J','Q','K','A']; 
// set card variable rank identifier

const value = [1,2,3,4,5,6,7,8,9,10,11,12,13]; 
// set variable number of cards in each suit

const suit = ['h','d','s','c']; 
// set variable suit types Hearts, Diamonds, Spades, Clubs

// Audio

const playerAudio = new Audio();
// sets variable playerAudio to equal creating a new instance of audio
// new operator lets devs create an instance of a user-defined object type or of one of the built-in object types
// Audio() constructor creates and returns a new HTMLAudioElement 
//      which can be either attached to a document for the user to interact with and/or
//      listen to, or can be used offscreen to manage and play audio.

/*----- app's state (variables) -----*/ 

let valueOne; // Set empty value variable one
let valueTwo; // Set empty value variable two


/*----- cached element references -----*/ 
let card = []; // empty card to represent individual car

let playerOneDeck = [];	// empty the deck for a clean slate
let playerTwoDeck = [];	// empty the deck for a clean slate




/*----- event listeners -----*/ 


// Audio - Background music
const bgPlayer = document.getElementById('bg-player'); 
// document represents the webpage loaded into the browser 
// getElementById represents a specific element by the id that was assigned in this case 'bg-player'
// bg-player is refrenced in the HTML in the following line <audio style="display: none;" id="bg-player" controls src="https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_04_-_Sentinel.mp3" loop>

const bgCheckbox = document.querySelector('input[type="checkbox"]');
// document represents the webpage loaded into the browser 
// .querySelector returs the first element in the document that matched the specific selector in this case 'input[type="checkbox"]'
// 'input[type="checkbox"]' references this line <input type="checkbox">Play Background Music
//      input is the parent and type checkbox is the child

bgCheckbox.addEventListener('change', handleBgChanged);
// bgCheckbox references the varriable const bgCheckbox
// .addEventListener listens for when the event change (checkbox is checked/unchecked)
// when the event change occurs the function handleBgChanged is invoked



// PlayerTotal Cards in deck
let playerOneTotal = document.getElementById('playerOneCardTotal')
// set variable playerOneTotal equal to the dom by element id playerOneCardTotal
// basically saying what happens to playerOneTotal in the JS happens in the HTML where this Id playerOneCardTotal is located

let playerTwoTotal = document.getElementById('playerTwoCardTotal')
// set variable playerTwoTotal equal to the dom by element id playerTwoCardTotal
// basically saying what happens to playerTwoTotal in the JS happens in the HTML where this Id playerTwoCardTotal is located


// Player Card Images
let playerOneCardImg = document.getElementById('playerOneCardImg')
// set variable playerOneCardImg equal to the dom by element id playerOneCardImg
// basically saying what happens to playerOneCardImg in the JS happens in the HTML where this Id playerOneCardImg is located

let playerTwoCardImg = document.getElementById('playerTwoCardImg')
// set variable playerTwoCardImg equal to the dom by element id playerTwoCardImg
// basically saying what happens to playerTwoCardImg in the JS happens in the HTML where this Id playerTwoCardImg is located


// Actions taken by player / winner message printed here
let gameActions = document.getElementById('gameActions')
// set variable gameActions equal to the dom by element id gameActions
// basically saying what happens to gameActions in the JS happens in the HTML where this Id gameActions is located


/*----- functions -----*/

// Lays each card out within an array
//  Creates an object of arrays that adds up to total numOfCardsInDeck = 52 cards 0-51   

let c = 0; // c = single card
while (c < numOfCardsInDeck) { // while loop 
    // A single card is less than the total number of cards in a deck
    for (let s = 0; s <= 3; s++) { // for loop
        // s is single suit, s = 0 (Js is zero based starts count at 0 when indexing array),
        //      s <= 3 sets array limit to be less than or equal to 3 
        //      s++ incrimentlly add +1 to itterate through numbers in s 
        //      starting at 0 and going up to 3 with a total of 4 items
        for (let rv = 0; rv <= 12; rv++) { // for loop
            // rv is rank and value, rv = 0 (Js is zero based starts count at 0 when indexing array),
            //      rv <= 12 sets array limit to be less than or equal to 12 
            //      rv++ incrimentlly add +1 to itterate through numbers in rv 
            //      starting at 0 and going up to 12 with a total of 13 items
            card[c] = { // card object includes four properties - suit, rank, value, cssClass
                suit: suit[s], // Diamond, Spades, Hearts, Clubs
                rank: rank[rv], // '02','03','04','05','06','07','08','09','10','J','Q','K','A'
                value: value[rv], // 1,2,3,4,5,6,7,8,9,10,11,12,13
                cssClass: suit[s] + rank[rv] // Combines the individual (suit = s) into suits and the individual (rank value = rv) ranks
                // so they can be called at the same time
            }
            c++; // Itterates through all of the (c = card) until the object of arrays is full
        }

    }
}


// use the > Fisher-Yates shuffle < to shuffle cards around
let shuffle = function(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
    	let temp = arr[i];
    	arr[i] = arr[j];
    	arr[j] = temp;
	}
	arr = arr;
	return arr;
}
// Splits the deck and assigns 
// the array to both deck 1 or 2
let assignDeck = function(arr){ 
    for(let i = 0; i < (arr.length); i++){
        if (i % 2 === 0) {
            playerOneDeck.push(arr[i]);
        } else {
            playerTwoDeck.push(arr[i]);
        }; 
    };
};	

// Decides who wins based on how many cards they have in their hand
let winner = function () { // creating a function that sets win conditions with the variable winner
    if (playerOneDeck.length >= 31) { // 30 is the number of cards needed in a players hand to wim
        $("#gameText").fadeOut(3000, function() {
            // Animation complete.
          })
          $("#gameText").remove();    
        gameActions.innerHTML = `<div style="display:none" id="gameText">Player 1 wins Game</div>`;
        $("#gameText").fadeIn(1000, function() {
            // Animation complete.
          }) 
    } else if (playerTwoDeck.length >= 31) { // 30 is the number of cards needed in a players hand to wim
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
    winner(); // Invoke winner funcetion
    render(); // Invoke render funcetion
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
    playerAudio.src = explosionSound;
    playerAudio.play();
}

function playGunSound() {
    playerAudio.src = gunCockedSound;
    playerAudio.play();
}

// function muteAll() {
//     muteSound.checked ? bgPlayer.muted() : bgPlayer.muted();
// }