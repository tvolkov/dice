var chai = require('chai');
var expect = chai.expect;
var DiceTokenizer = require('../app/DiceTokenizer.js');

describe('DiceTokenizer', function(){

    describe('Should validate input string', function(){

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

    describe('Should tokenize input string', function(){

        it('Should procude no operators if input expression doesn not have pluses or minuses', function(){
            var input = '2d4'

            var testDiceTokenizer = new DiceTokenizer(input);
            var tokens = testDiceTokenizer.tokenize();

            expect(tokens.operators.length).to.equal(0);
            expect(tokens.operands.length).to.equal(1);
            expect(tokens.operands).to.contain('2d4');
        });

        it('Should put pluses and minuses to operators array', function(){
            var input = '2d4 + 3'

            var testDiceTokenizer = new DiceTokenizer(input);
            var tokens = testDiceTokenizer.tokenize();

            expect(tokens.operators.length).to.equal(1);
            expect(tokens.operators).to.contain('+');
            expect(tokens.operands.length).to.equal(2);
            expect(tokens.operands).to.contain('2d4');
            expect(tokens.operands).to.contain('3');
        });

        it('Should treat percent sign as 100', function(){
            var input = 'd%';

            var testDiceTokenizer = new DiceTokenizer(input);
            var tokens = testDiceTokenizer.tokenize();

            expect(tokens.operators.length).to.equal(0);
            expect(tokens.operands.length).to.equal(1);
            expect(tokens.operands).to.contain('d100');
        });
    });
});