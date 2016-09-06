var chai = require('chai');
var expect = chai.expect;
var DiceTokenizer = require('../app/DiceTokenizer.js');

describe("DiceTokenizer", function(){

    describe("Should validate input string", function(){

        it('Should throw an Error if input string is undefined', function(){
            var input = undefined;

            var testDiceTokenizer = new DiceTokenizer(input);
            expect(testDiceTokenizer.tokenize.bind(testDiceTokenizer)).to.throw('invalid expression');
        });

        it('Should throw an Error if input string length is less than 2', function(){
            var input = 'd';

            var testDiceTokenizer = new DiceTokenizer(input);
            expect(testDiceTokenizer.tokenize.bind(testDiceTokenizer)).to.throw('invalid expression');
        });        

        it.skip('Should throw an Error if input string is not comply to regex', function(){
            var input = 'q1w2e3';

            var testDiceTokenizer = new DiceTokenizer(input);
            expect(testDiceTokenizer.tokenize.bind(testDiceTokenizer)).to.throw('invalid expression');
        });
    });
});