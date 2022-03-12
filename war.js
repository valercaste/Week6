//Creating class cards and values of cards:
let suits = ['Diamond','Spade','Club','Heart'];
let values = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King','ACE'];
const cardMapValues = {
    '2':2, 
    '3':3,
    '4':4,
    '5':5,
    '6':6,
    '7':7,
    '8':8,
    '9':9,
    '10':10,
    'Jack':11,
    'Queen':12,
    'King':13,
    'ACE':14}


class Card {
    constructor(suit, number){
        this.suit = suit;
        this.number = number;
    }
}
class Player{
    constructor(name){
        this.name = name;
        this.score = 0;
        this.playerDeck = [];
    }
    addNewDeck(deck){
        this.playerDeck = deck;
    }
}
class Deck{
    constructor(cards = newDeck()){
        this.cards = cards;
        
    } shuffle(){
        this.cards.length
        for(let i = this.cards.length -1; i >= 0; i--){
            const newCard = Math.floor(Math.random()* this.cards.length);
            const oldCard = this.cards[newCard];
            this.cards[newCard]= this.cards[i];
            this.cards[i] = oldCard;
        }

    }
}
function newDeck(){
    return suits.flatMap(suit => { 
        return values.map(number =>{
            return new Card(suit, number);
        });
    });
}
function warGame(player1, player2){
    let deck = new Deck();
    deck.shuffle();
//splitting deck in half
let middleOfDeck = (deck.numberOfCards / 2);
//player 1 and player 2 add new deck (makes two decks) use splice
player1.addNewDeck(deck.cards.splice(0, middleOfDeck));
player2.addNewDeck(deck.cards.splice(middleOfDeck, deck.numberOfCards));

}


function outPut(player1, player2, roundNum) {
    console.log(`${player1.name} plays: ${player1.playerDeck[roundNum].value} of ${player1.playerDeck[roundNum].suit}
    `);
    console.log(`${player2.name} plays: ${player2.playerDeck[roundNum].value} of ${player2.playerDeck[roundNum].suit}
    `);
  }
  
  
  function theResults(player1, player2) {
    for (let i = 0; i < player1.playerDeck.length; i++) {
        outPut(player1, player2, i);
      if (cardValueMap[player1.playerDeck[i].value] > cardValueMap[player2.playerDeck[i].value]) {
        player1.playerScore += 1;
        console.log(`Yey! ${player1.name} has won this round`);
      } else if (cardValueMap[player1.playerDeck[i].value] < cardValueMap[player2.playerDeck[i].value]) {
        player2.playerScore += 1;
        console.log(`Yey! ${player2.name} has won this round`);
      } else {
        console.log("This is a tie, no points rewarded :(");
      }
    }
  }
function endGame(player1, player2){
    if (player1.playerScore > player2.playerScore) {
        console.log(` Congrats! ${player1.name} Has won this round with a final score of: ${player1.playerScore}`);
        alert(` Congrats! ${player1.name} Has won this round with a final score of: ${player1.playerScore}`);
      } else if (player1.playerScore < player2.playerScore) {
        console.log(`Hooray! ${player2.name} has won this round with a final score of: ${player2.playerScore}`);
        alert(`Hooray! ${player2.name} has won this round with a final score of: ${player2.playerScore}`);
      } else {
        console.log(`${player1.name} and ${player2.name} have tied!:(`);
        alert(`${player1.name} and ${player2.name} have tied!:(`);
      }
}

let Val = new Player("Val");
let Joe = new Player("Joe");
warGame(Val, Joe);
theResults(Val, Joe);
endGame(Val, Joe);

