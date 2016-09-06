var chai = require('chai');
var expect = chai.expect;

var ExpressionTreeBuilder = require('../app/ExpressionTreeBuilder.js');

describe('ExpressionTreeBuilder', function(){
    it('Should build a tree from tokens arrays', function(){
        var input = {operands: ['4d6', '7'], operators: ['+']}

        var expressionTreeBuilder = new ExpressionTreeBuilder(input);
        var result = expressionTreeBuilder.buildTree();

        expect(result.value).to.equal('+');
        expect(result.left).to.equal('4d6');
        expect(result.right).to.equal('7');
    });

    it('Should throw an error if tokens are null', function(){
        var input = undefined;

        var expressionTreeBuilder = new ExpressionTreeBuilder(input);

        expect(expressionTreeBuilder.buildTree.bind(expressionTreeBuilder)).to.throw('no tokens found');
    });
});