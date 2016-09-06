var chai = require('chai');
var expect = chai.expect;

var TreeVisitor = require('../app/TreeVisitor.js');

describe('TreeVisitor', function(){

    it('Should calculate values', function(){
        var input = {value: '+', left: '4d6', right: '7'};

        var treeVisitor = new TreeVisitor(input);
        var result = treeVisitor.traverse();

        expect(result.max).to.equal(31);
        expect(result.min).to.equal(11);
        //probably I have to mock the random-js somehow to check what's in the rolls array
    });

    it('Should throw an error if tree is empty', function(){
        var input = undefined;

        var treeVisitor = new TreeVisitor(input);

        expect(treeVisitor.traverse.bind(treeVisitor)).to.throw('empty tree');
    });
});