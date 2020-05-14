/*----- constants -----*/ 

// Define constants to start game

//  Number of cards in the deck defined
const numOfCardsInDeck = 52; // 52 cards = 1 deck

const explosionSound = 'sounds/Tank-Firing.mp3' 
// set variable name to explosionSound to sound mp3
const gunCockedSound = 'sounds/Gun+Cock.mp3' 
// set variable name to gunCockedSound to sound mp3

const rank = ['02','03','04','05','06','07','08','09','10','J','Q','K','A']; 
// set card variable name to rank identifier

const value = [1,2,3,4,5,6,7,8,9,10,11,12,13]; 
// set variable name to value which represents number of cards in each suit

const suit = ['h','d','s','c']; 
// set variable name to suit types Hearts, Diamonds, Spades, Clubs

// Audio

const playerAudio = new Audio();
// sets variable name to playerAudio to equal creating a new instance of audio
// new operator lets devs create an instance of a user-defined object type or of one of the built-in object types
// Audio() constructor creates and returns a new HTMLAudioElement 
//      which can be either attached to a document for the user to interact with and/or
//      listen to, or can be used offscreen to manage and play audio.


/*----- app's state (variables) -----*/ 

let valueOne; // Set empty value element 
let valueTwo; // Set empty value element


// New
let valueWarOne; // Set empty value element 
let valueWarTwo; // Set empty value element 

/*----- cached element references -----*/ 

let card = []; // Set card to empty card to represent individual car

let playerOneDeck = [];	// Set playerOneDeck to an empty the deck for a clean slate
let playerTwoDeck = [];	// Set playerTwoDeck to an empty the deck for a clean slate


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
// .addEventListener listens for when the event occurs in this case its change (checkbox is checked/unchecked)
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
            c++; // Itterates through all of the (c = card properties) until the object of arrays is full
        }

    }
}


// use the > Fisher-Yates shuffle < to shuffle cards around
// For more information on the shuffle (https://www.frankmitchell.org/2015/01/fisher-yates/) or (https://bost.ocks.org/mike/shuffle/)
let shuffle = function(arr) { 
    // set varriable name to shuffle 
    // create a function and pass arr (arr = array) through it
    for (let i = arr.length - 1; i > 0; i--) { // for loop
        // i equalls the length of the passed through arr minus 1
        //      i is greater than 0 (arr.length - 1) is higher than 0
        //      i decrements -1 through each element in (arr.length - 1) until it hits 0
        let j = Math.floor(Math.random() * (i + 1));
        //  set variable j equal to Math.floor(Math.random())
        //      Math.floor() function returns the largest integer less than or equal to a given number
        //      Math.random() function pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range
        //      (i + 1) is like writing ((arr.length - 1) + 1)
        let temp = arr[i];
        //  sets variable temp equal to arr of i = arr.length
        arr[i] = arr[j];
        //  sets arr[i] equal to arr[j]
    	arr[j] = temp;
        //  sets arr[i] equal to temp
        //  Loops through the three temp => arr[i] => arr[j] => temp
	}
	arr = arr; // sets all arrays equal
	return arr; // returns final array arr
}
// Splits the deck and assigns 
// the array to both deck 1 or 2
let assignDeck = function(arr){ 
    for(let i = 0; i < (arr.length); i++){ // for loop
        if (i % 2 === 0) { // if statment
            // (i % 2 === 0) figres out the remainder of i % 2 and uses a strict comparison to see if it's equal to 0
            playerOneDeck.push(arr[i]);
            // if the above if statement is even
            // selects the empty array of playerOneDeck and pushes all the even idx in the array into playerOneDeck
            //      push() = adds one or more elements to the end of an array and returns the new length of the array
        } else { // else statment
            playerTwoDeck.push(arr[i]);
            // if the above if statement is odd
            // selects the empty array of playerTwoDeck and pushes all the even idx in the array into playerTwoDeck
            //      push() = adds one or more elements to the end of an array and returns the new length of the array
        }; 
    };
};	

// Winner function is defined below
// Decides who wins based on how many cards they have in their hand
let winner = function () { // creating a function that sets win conditions with the variable winner
    if (playerOneDeck.length >= 52) { // if statement
        // 31 is the number of cards needed in a players hand to wim
        $("#gameText").fadeOut(3000, function() { 
            // $("#gameText") uses jquery syntax to select the Id gameText from the HTML
            // .fadeOut() makes element fade out over 3000 miliseconds
            // Animation complete.
        })
        $("#gameText").remove();    
        // $("#gameText") uses jquery syntax to select the Id gameText from the HTML
        // .removes() removes an element from the HTML
        // Animation complete.
        gameActions.innerHTML = `<div style="display:none" id="gameText">Player 1 Wins Game!</div>`;
        $("#gameText").fadeIn(1000, function() {
            // $("#gameText") uses jquery syntax to select the Id gameText from the HTML
            // .fadeIn() makes element fade out over 1000 miliseconds
            // Animation complete.
        }) 
    } else if (playerTwoDeck.length >= 52) { // else if statmente
        // 31 is the number of cards needed in a players hand to wim
        $("#gameText").fadeOut(3000, function() {
            // $("#gameText") uses jquery syntax to select the Id gameText from the HTML
            // .fadeOut() makes element fade out over 3000 miliseconds
            // Animation complete.
        })
        $("#gameText").remove();    
        // $("#gameText") uses jquery syntax to select the Id gameText from the HTML
        // .removes() removes an element from the HTML
        gameActions.innerHTML = `<div style="display:none" id="gameText">Player 2 wins Game!</div>`;
        $("#gameText").fadeIn(1000, function() {
            // $("#gameText") uses jquery syntax to select the Id gameText from the HTML
            // .fadeIn() makes element fade out over 1000 miliseconds
            // Animation complete.
        })
	} else { //else statement 
        return false; // if neither of the (if or the else if) statments meet their conditions 
        $("#gameText").fadeIn(1000, function() {
            // $("#gameText") uses jquery syntax to select the Id gameText from the HTML
            // .fadeIn() makes element fade out over 1000 miliseconds
            // Animation complete.
          })
	}
};

// calls the init() function in global scope
init();

// init function is defined below
function init() { // Starts game attached to button to flip cards
    playerOneDeck = [], playerTwoDeck = []; // Set player 1 & 2 decks to be empty strings 
    // sets as empty strings within init function so strings can be reset when reset button is clicked and calls the init() function
    let shuffleDeck = shuffle(card)
    // sets varible named shuffleDeck to equal shuffle function passing through each of the card
    assignDeck(shuffleDeck) 
    // runs assignDeck function passing in shuffleDeck which spits the shuffled cards into two
    render();
    // calls render function
}

// defines the render function
function render() { // creates render function
    playerOneTotal.textContent = playerOneDeck.length
    // references playerOneTotal variable then sets the text content to equal the entire length 
    //      of the arrays within the object container playerOneDeck
    //  .textContent => changes the text of a page element
    playerTwoTotal.textContent = playerTwoDeck.length
    // references playerOneTotal variable then sets the text content to equal the entire length 
    //      of the arrays within the object container playerTwoDeck
    //  .textContent => changes the text of a page element
    
    valueOne = playerOneDeck.shift()
    // set valueOne equal to playerOneDeck object array and shifts the first element out of the array and returns that element
    valueTwo = playerTwoDeck.shift()
    // set valueTwo equal to playerTwoDeck object array and shifts the first element out of the array and returns that element    

    playerOneCardImg.innerHTML = `<div class="${valueOne.cssClass} card xlarge"></div>`
    // selects playerOneCardImg and set the inner HTML (document.getElementById('playerOneCardImg')) to be `<div class="${valueOne.cssClass} card xlarge"></div>`
    //      innerHTML => sets or returns the HTML content (inner HTML) of an element
    // valueOne was set to (playerOneDeck.shift())
    // cssClass was set to suit[s] + rank[rv]
    // finds the suit and rank of the element returned after shifting a card out of playerOneDeck
    playerTwoCardImg.innerHTML = `<div class="${valueTwo.cssClass} card xlarge"></div>`
    // selects playerTwoCardImg and set the inner HTML (document.getElementById('playerTwoCardImg')) to be `<div class="${valueTwo.cssClass} card xlarge"></div>`
    //      innerHTML => sets or returns the HTML content (inner HTML) of an element
    // finds the suit and rank of the element returned after shifting a card out of playerTwoDeck
    //      valueTwo was set to (playerTwoDeck.shift())
    //      cssClass was set to suit[s] + rank[rv]
}

function warGameCheck(){
    $("#gameText").fadeOut(5000, function() {
        // $("#gameText") uses jquery syntax to select the Id gameText from the HTML
        // .fadeOut() makes element fade out over 5000 miliseconds
        // Animation complete.
      })
    $("#gameText").remove();
        // $("#gameText") uses jquery syntax to select the Id gameText from the HTML
        // .removes() removes an element from the HTML
        // Animation complete.

    if (valueOne.value > valueTwo.value) {
        // valueOne shifts the first element out of the array and returns that element then
        //      .Value (1,2,3,4,5,6,7,8,9,10,11,12,13) pulls the value associated with the returned element from ValueOne
        // Then it checks if valueOne.value is greater than valueTwo.value
        // valueTwo shifts the first element out of the array and returns that element then
        //      .Value (1,2,3,4,5,6,7,8,9,10,11,12,13) pulls the value associated with the returned element from ValueTwo
        playerOneDeck.push(valueOne, valueTwo)
        // playerOneDeck.push takes the cards associated with valueOne & valueTwo and adds them to playerOneDeck
        gameActions.innerHTML = `<div style="display:none" id="gameText">Player 1 takes card</div>`
        $("#gameText").fadeIn(1000, function() {
            // $("#gameText") uses jquery syntax to select the Id gameText from the HTML
            // .fadeIn() makes element fade out over 1000 miliseconds
            // Animation complete.
        })
    } else if (valueOne.value < valueTwo.value) {
        // valueOne shifts the first element out of the array and returns that element then
        //      .Value (1,2,3,4,5,6,7,8,9,10,11,12,13) pulls the value associated with the returned element from ValueOne
        // Then it checks if valueOne.value is less than than valueTwo.value
        // valueTwo shifts the first element out of the array and returns that element then
        //      .Value (1,2,3,4,5,6,7,8,9,10,11,12,13) pulls the value associated with the returned element from ValueTwo
        playerTwoDeck.push(valueOne, valueTwo)
        // playerTwoDeck.push takes the cards associated with valueOne & valueTwo and adds them to playerTwoDeck
        gameActions.innerHTML = `<div style="display:none" id="gameText">Player 2 takes card</div>`
        $("#gameText").fadeIn(1000, function() {
            // $("#gameText") uses jquery syntax to select the Id gameText from the HTML
            // .fadeIn() makes element fade out over 1000 miliseconds
            // Animation complete.
        })
    } else { 
        valueWarOne = playerOneDeck.slice(0, 5); // Grabs the first 3 arrays in the object of arrays
        valueWarTwo = playerTwoDeck.slice(0, 5); // Grabs the first 3 arrays in the object of arrays

        playerOneDeck.push(valueOne)
        // playerOneDeck.push takes the cards associated with valueOne and adds them to playerOneDeck
        playerTwoDeck.push(valueTwo)
        // playerTwoDeck.push takes the cards associated with valueTwo and adds them to playerTwoDeck
        gameActions.innerHTML = `<div style="display:none" id="gameText">War!</div>`
        $("#gameText").fadeIn(1000, function() {
            // $("#gameText") uses jquery syntax to select the Id gameText from the HTML
            // .fadeIn() makes element fade out over 1000 miliseconds
            // Animation complete.

            // New
            // Pushes all cards in play into opponents deck
            if (valueOne.value > valueTwo.value) {
            // valueOne shifts the first element out of the array and returns that element then
            //      .Value (1,2,3,4,5,6,7,8,9,10,11,12,13) pulls the value associated with the returned element from ValueOne
            // Then it checks if valueOne.value is less than than valueTwo.value
            // valueTwo shifts the first element out of the array and returns that element then
            //      .Value (1,2,3,4,5,6,7,8,9,10,11,12,13) pulls the value associated with the returned element from ValueTwo

                valueWarTwo.forEach(card => {
                // for each card in the array valueWarTwo
                    playerOneDeck.push(card)
                    // adds card element to the end of the array of playerOneDeck
                })
                playerTwoDeck.pop() // removes the last element from the array playerTwoDeck and returns that element
                playerTwoDeck.pop() // removes the last element from the array playerTwoDeck and returns that element
                playerTwoDeck.pop() // removes the last element from the array playerTwoDeck and returns that element
                playerTwoDeck.pop() // removes the last element from the array playerTwoDeck and returns that element
                playerTwoDeck.pop() // removes the last element from the array playerTwoDeck and returns that element
            } 
            else if (valueOne.value < valueTwo.value) {
            // valueOne shifts the first element out of the array and returns that element then
            //      .Value (1,2,3,4,5,6,7,8,9,10,11,12,13) pulls the value associated with the returned element from ValueOne
            // Then it checks if valueOne.value is less than than valueTwo.value
            // valueTwo shifts the first element out of the array and returns that element then
            //      .Value (1,2,3,4,5,6,7,8,9,10,11,12,13) pulls the value associated with the returned element from ValueTwo
                
                valueWarOne.forEach(card => {
                // for each card in the array valueWarTwo
                    playerTwoDeck.push(card)
                    // adds card element to the end of the array of playerOneDeck
                })
                playerOneDeck.pop() // removes the last element from the array playerOneDeck and returns that element
                playerOneDeck.pop() // removes the last element from the array playerOneDeck and returns that element
                playerOneDeck.pop() // removes the last element from the array playerOneDeck and returns that element
                playerOneDeck.pop() // removes the last element from the array playerOneDeck and returns that element
                playerOneDeck.pop() // removes the last element from the array playerOneDeck and returns that element
            }
        })
    }
    winner(); // Invoke winner function
    render(); // Invoke render function
}


// Button event listeners
document.querySelector('#resetButton').addEventListener('click', init); 
// document represents the webpage loaded into the browser 
// .querySelector returs the first element in the document that matched the specific selector in this case '#resetButton'
// .addEventListener listens for when the event occurs in this case the event is click
// when the event click occurs invoke init function
document.querySelector('#resetButton').addEventListener('click', playExpSound); 
// document represents the webpage loaded into the browser 
// .querySelector returs the first element in the document that matched the specific selector in this case '#resetButton'
// .addEventListener listens for when the event occurs in this case the event is click
// when the event click occurs invoke playExpSound function
// Audio


// Audio selectors & button event listeners
document.querySelector('#flipButton').addEventListener('click', warGameCheck);
// document represents the webpage loaded into the browser 
// .querySelector returs the first element in the document that matched the specific selector in this case '#flipButton'
// .addEventListener listens for when the event occurs in this case the event is click
// when the event click occurs invoke warGameCheck function
document.querySelector('#flipButton').addEventListener('click', playGunSound);
// document represents the webpage loaded into the browser 
// .querySelector returs the first element in the document that matched the specific selector in this case '#flipButton'
// .addEventListener listens for when the event occurs in this case the event is click
// when the event click occurs invoke playGunSound function
// Audio

// Audio
function handleBgChanged() { 
    // creates a function called handleBgChanged
    bgCheckbox.checked ? bgPlayer.play() : bgPlayer.pause();
    // call bgCheckbox element and figures out if it's checked
    // if it's checked call bgPlayer and start playing attached music
    // if it's unchecked call bgPlayer and pause attached music
}

function playExpSound() {
    // creates a function called playExpSound
    playerAudio.src = explosionSound;
    // call playerAudio element by source
    // explosionSound element conains sound file source location
    playerAudio.play();
    // call playerAudio and play attached sound
}

function playGunSound() {
    // creates a function called playGunSound
    playerAudio.src = gunCockedSound;
    // call playerAudio element by source
    // gunCockedSound element conains sound file source location
    playerAudio.play();
    // call playerAudio and play attached sound
}