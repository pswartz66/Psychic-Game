
// Create an array of words related to basketball theme
// All NBA teams city, name, player name
var words = [
    'Atlanta Hawks',
    'Boston Celtics', 
    'Brooklyn Nets',
    'Charlotte Bobcats', 
    'Chicago Bulls',
    'Cleveland Cavaliers',
    'Dallas Mavericks',
    'Denver Nuggets',
    'Detroit Pistons',
    'Golden State Warriors', 
    'Houston Rockets',
    'Indiana Pacers',
    'LA Clippers',
    'LA Lakers',
    'Memphis Grizzlies', 
    'Miami Heat',
    'Milwaukee Bucks',
    'Minnesota Timberwolves', 
    'New Orleans Hornets',
    'New York Knicks',
    'Oklahoma City Thunder', 
    'Orlando Magic',
    'Philadelphia Sixers', 
    'Phoenix Suns',
    'Portland Trail Blazers', 
    'Sacramento Kings',
    'San Antonio Spurs',
    'Toronto Raptors',
    'Utah Jazz',
    'Washington Wizards',
    'LeBron James',
    'Kevin Durant',
    'Stephen Curry',	
    'James Harden',
    'Anthony Davis',	
    'Giannis Antetokounmpo',	
    'Russell Westbrook',
    'Chris Paul',
    'Joel Embiid',	
    'Jimmy Butler',
    'Paul George',
    'Kawhi Leonard',
    'Draymond Green',
    'Rudy Gobert',
    'Damian Lillard',
    'Al Horford',
    'Kyrie Irving',
    'Nikola Jokic',
    'Karl Anthony Towns',
    'Victor Oladipo',
    'LaMarcus Aldridge',
    'Klay Thompson',
    'Kyle Lowry',
    'John Wall',
    'Gordon Hayward',
    'Ben Simmons',
    'Bradley Beal',	 
    'Khris Middletown',
    'Jrue Holiday',
    'DeMar DeRozan',	
    'Kevin Love',
    'Kemba Walker',	
    'CJ McCollum',
    'Donovan Mitchell',	
    'Clint Capela',
    'Mike Conley Jr',	
    'Paul Millsap',
    'Steven Adams',
    'Jayson Tatum',
    'Marc Gasol',
    'Blake Griffin',	
    'Otto Porter',
    'DeAndre Jordan',	
    'Gary Harris',
    'Goran Dragic',	
    'Andre Drummond',	
    'Jaylen Brown',
    'Robert Covington',	
    'Eric Gordon',
    'Devin Booker',	
    'Derrick Favors',
    'Kristaps Porzingis',	
    'Eric Bledsoe',
    'Dario Saric',
    'Jamal Murray',	
    'Joe Ingles',
    'Ricky Rubio',	
    'Jeff Teague',	
    'Harrison Barnes',	
    'Nikola Mirotic',
    'Lou Williams',
    'JJ Redick',
    'Jonas Valanciunas',	
    'Jusef Nurkic',
    'Tobias Harris',	
    'Aaron Gordon',
    'Myles Turner',
    'DeMarcus Cousins',	
    'Dwight Howard',
    'Will Barton',
    'Josh Richardson',
    'Julius Randle',
    'Nicolas Batum',
    'Andrew Wiggins',
    'Brandon Ingram',
    'Thaddeus Young',
    'Trevor Ariza',
    'Serge Ibaka',
    'Domantas Sabonis',	
    'Dennis Schroder',
    'Al Farouq Aminu',	
    'Terry Rozier',
    'Taj Gibson',
    'Lauri Markkanen',	
    'PJ Tucker',
    'James Johnson',	
    'Andre Iguodala',
    'Kyle Anderson',
    'Dejounte Murray',	
    'Nikola Vucevic',
    'Kent Bazemore',
    'Evan Fournier',
    'Kelly Olynyk',
    'Fred Vanfleet',	
    'Demarre Carroll',	
    'Dirk Nowitzki',
    'Reggie Jackson',
    'Paul Gasol',
    'Brook Lopez',	
    'Lonzo Ball']



// List of all letters in an array
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 
                'g', 'h', 'i', 'j', 'k', 'l', 
                'm', 'n', 'o', 'p', 'q', 'r', 
                's', 't', 'u', 'v', 'w', 'x', 
                'y', 'z']
                
// # of incorrect guesses upon which the game will end
var incorrect_guesses = 6;
var correct_guesses = 0;

// Total # of guesses = the # of letters in alphabet
var total_guesses = alphabet.length;

// Each time user guesses a letter store it in
// user_guessed_letters array
// reset at game end
var user_guessed_letters = [];

// Array of wrong guesses
var wrong_guesses = [];

// Variables that hold references to the html id's
var winsText = document.getElementById("wins-text");
var currentWord = document.getElementById("current-word");
var placeholderKeys = document.getElementById("placeholder-keys");
var guessesRemaining = document.getElementById("guesses-remaining");
var guessedLetters = document.getElementById("guessed-letters");


// Generates a random word from the words array above
var computerWord = words[Math.floor(Math.random() * words.length)].toLowerCase();



// Turn computerWord into an array of "_" 's 
var computerWordList = [];
for (var i = 0; i < computerWord.length; i++) {
    if (computerWord.charAt(i) !== " ") {
        computerWordList.push("_");
    }
    else {
        computerWordList.push("+");
    }
};



// CHANGE THIS TO A FUNCTION TO BE CALLED TO CONVERT ARRAY OF _ TO LETTERS????????????
var computerWordString = "";
for (var i = 0; i < computerWord.length; i++) {
    if (computerWord.charAt(i) !== " ") {
        computerWordString += "_ ";
    }
    else {
        computerWordString += computerWord.charAt(i) + " "; 
    }
};


// function to check if userguess is in guessed letters array
// to be called later inside onkeyup 
function doesExistInArray(myvalue, array) {
    for (var i = 0; i < array.length; i ++) {
        if (array[i] === myvalue) {
            return true;
        }
        else {
            return false;
        }
    }
};

// function to check how many letters are in a string
function numberOfLetters(myvalue, stringvalue) {
    var my_count = 0;
    for (var i = 0; i < stringvalue.length; i ++) {
        if (stringvalue.charAt(i) === myvalue) {
            my_count += 1;
        }
    }
    return my_count;
};

// length of computerWord needs to be changed dynamically below
var computerWordLength = computerWord.length;

// # of guesses remaining = length of computerWord - 1
var guessesRemaining = computerWord.length;


// number of wins
var wins = 0;

// number of losses
var losses = 0;

console.log(computerWord);


function resetGame() {
    var computerWord = "";
    computerWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
    console.log(computerWord);

    // Turn computerWord into an array of "_" 's 
    var computerWordList = []
    for (var i = 0; i < computerWord.length; i++) {
        if (computerWord.charAt(i) !== " ") {
            computerWordList.push("_");
        }
        else {
            computerWordList.push("  +  ");
        }
    }


    // CHANGE THIS TO A FUNCTION TO BE CALLED TO CONVERT ARRAY OF _ TO LETTERS????????????
    // var computerWordString = "";
    for (var i = 0; i < computerWord.length; i++) {
        if (computerWord.charAt(i) !== " ") {
            computerWordString += "_ ";
        }
        else {
            computerWordString += computerWord.charAt(i) + " ";
        }
    }

    wins += 1;
    losses += 1;

};

var newcomputerWordList = [];

// MAIN GAME LOGIC TAKES PLACE HERE ------------------------------------- //
document.onkeyup = function(event) {

    // Set the keyboard click from the user to a variable
    var userGuess = event.key;

    // letter = true if 'a' is in computerWord
    var letter = computerWord.includes(userGuess);
    
    console.log(computerWordLength);

    // Push letter to user_guessed_letters array
    user_guessed_letters.push(userGuess);

    // determine how many guesses the user has remaining
    guessesRemaining = (computerWordLength - user_guessed_letters.length)
    


    // End game if user guessed 6 incorrect guesses
    if (wrong_guesses.length + 1 === incorrect_guesses) {
        
        computerWordList = [];
        computerWordString = "";
        user_guessed_letters = [];
        wrong_guesses = [];
        correct_guesses = 0;
        incorrect_guesses = 6;
        guessesRemaining = computerWord.length;

        
        alert("GAME OVER!");

        resetGame();

        // document.getElementById("placeholder-keys").reset();

        // playAgain Yes No?


        
        // reload page and update wins/losses
        // document.location.reload();

        console.log(losses);

    }




    if (letter) {

        correct_guesses += 1;


        for (var i = 0; i < computerWord.length; i ++) {
            
            if (computerWord.charAt(i) === userGuess) {
                computerWordList[i] = userGuess;

                
            }
            
            
        }


        console.log('You guessed letter "' + userGuess + '" correctly');
        console.log('There were "' + numberOfLetters(userGuess, computerWord) +  " " + userGuess + "'s");
        console.log(computerWordList.join(' '));
        


    }

    else {

        wrong_guesses.push(userGuess);

        if (wrong_guesses.length === incorrect_guesses) {
            // console.log("exit loop");
        }

        else {
            // console.log("wrong guesses " + wrong_guesses.join(', '))
        }

        // console.log(userGuess + " is not in computerWord");


    }
    

    if (computerWordList === (computerWord.substr(0, computerWord.indexOf("+")) + computerWord.substr(computerWord.indexOf("+"), computerWord.length))) {
        alert("You win");

    }


    
    if (computerWordList.join('') === (computerWord.substr(0, computerWord.indexOf(" ")) + "+" + computerWord.substr(computerWord.indexOf(" ") + 1, computerWord.length))) {
        alert("You win");

    };

    

    /* console.log(user_guessed_letters);
    console.log(wrong_guesses);


    // push userGuess to arrays
    /* wrong_guesses.push(userGuess); */
    

    
    
    

};



