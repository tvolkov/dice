require('node-import');


// include('dice/DiceTokenizer');
var DiceTokenizer = require('./DiceTokenizer.js');
var ExpressionTreeBuilder = require('./ExpressionTreeBuilder.js');

function DiceExpression(strExpression) {
    this.strExpression = strExpression.toLowerCase();
    this.tree = this.parseExpression();
}

DiceExpression.prototype.parseExpression = function(){
    var diceTokenizer = new DiceTokenizer(this.strExpression);   
    var tokens = diceTokenizer.tokenize();
    var treeBuilder = new ExpressionTreeBuilder(tokens);
    var tree = treeBuilder.buildTree();
}

module.exports = DiceExpression;