
function createDeck() {
    var suits = ["Clubs", "Hearts", "Diamond", "Spades"];
    var ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A" ];
    var deck = [];
    
    for(let i = 0; i < 4; i++){
    for(let j = 0; j < 13; j++) {
        deck.push(suits[i] + ranks[j]);
    }
    } 
    return deck;
}

function shuffleDeck(deck) {
    for(var i = 0; i < 52; i++) {
        var temp = deck[i];
        var randomNum = Math.floor(Math.random() * 52)
        deck[i] = deck[randomNum]
        deck[randomNum] = temp
    }
}

var testDeck = createDeck();
shuffleDeck(testDeck);
console.log(testDeck);