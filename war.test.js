//Unit testing code:
const expect = chai.expect;

describe('FirstFunction', function(){
    describe('newDeck', function(){
        it('should return a new suit', function(){
            expect(function(){
                newDeck(suit =>{

                });
            });
        });
        it('should return new values', function(){
            expect(function(){
                newDeck(number =>{

                });
            });
        });
    });
});
describe('SecondFunction', function(){
    describe('warGame', function(){
        it('should create new deck, shuffle and split the deck down the middle', function(){
            expect(function(){
                warGame(deck.Shuffle);
            });
            it('should split the deck in the middle', function(){
                expect(function(){
                    warGame(deck.numberOfCards / 2);
                });
             });
         });
    });
});
describe('ThirdFunction', function(){
    describe('outPut', function(){
        it('should print out player1 name, the round of the game, the value and the suits', function(){
            expect(function(){
                outPut(`${player1.name} plays: ${player1.playerDeck[roundNum].value} of ${player1.playerDeck[roundNum].suit}
                `);
            });
        
        });
    });
});
describe('FourthFunction', function(){
    describe('theResults', function(){
        it('should print this is a tie, no points rewarded :(',function(){
            expect(function(){
                theResults(cardValueMap[player1.playerDeck[i].value] < cardValueMap[player2.playerDeck[i].value]);
            });
        });
    });
});
describe('FinalFunction', function(){
    describe('endGame', function(){
        it('should print out the name of the player who wins. If it is a tie, it will print a alert saying Tie :(', function(){
            expect(function(){
                endGame(`${player1.name} and ${player2.name} have tied!:(`);
            });
        });
    });
});