

// List of all letters in an array
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 
                'g', 'h', 'i', 'j', 'k', 'l', 
                'm', 'n', 'o', 'p', 'q', 'r', 
                's', 't', 'u', 'v', 'w', 'x', 
                'y', 'z']
                
// # of incorrect guesses upon which the game will end
var incorrect_guesses = 6;

// Total # of guesses = the # of letters in alphabet
var total_guesses = alphabet.length;

// Each time user guesses a letter store it in
// user_guessed_letters array
// reset at game end
var user_guessed_letters = [];


// Variables that hold references to the html id's
var winsText = document.getElementById("wins-text");
var currentWord = document.getElementById("current-word");
var placeholderKeys = document.getElementById("placeholder-keys");
var guessesRemaining = document.getElementById("guesses-remaining");
var guessedLetters = documment.getElementById("guessed-letters");




