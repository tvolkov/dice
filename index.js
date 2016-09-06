require('node-import');


var DiceTokenizer = require('./DiceTokenizer.js');
var ExpressionTreeBuilder = require('./ExpressionTreeBuilder.js');
var TreeVisitor = require('./TreeVisitor.js');

function DiceExpression(strExpression) {
    this.strExpression = strExpression.toLowerCase();
    this.tree = this.parseExpression();
}

DiceExpression.prototype.parseExpression = function(){
    var diceTokenizer = new DiceTokenizer(this.strExpression);   
    var tokens = diceTokenizer.tokenize();
    var treeBuilder = new ExpressionTreeBuilder(tokens);
    var tree = treeBuilder.buildTree();
    var treeVisitor = new TreeVisitor(tree);
    var result = treeVisitor.traverse();
    console.log(result);
}

module.exports = DiceExpression;