
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
    'Karl Anthony-Towns',
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
    'Pau Gasol',
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

// Total # of guesses = the # of letters in alphabet
var total_guesses = alphabet.length;

// Each time user guesses a letter store it in
// user_guessed_letters array
// reset at game end
var user_guessed_letters = [];


// Variables that hold references to the html id's
/* var winsText = document.getElementById("wins-text");
var currentWord = document.getElementById("current-word");
var placeholderKeys = document.getElementById("placeholder-keys");
var guessesRemaining = document.getElementById("guesses-remaining");
var guessedLetters = documment.getElementById("guessed-letters");
 */


var computerWord = words[Math.floor(Math.random() * words.length)];

console.log(computerWord);

document.onkeyup = function(event) {

    var userGuess = event.key;
    




}

