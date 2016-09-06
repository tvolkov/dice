var DiceTokenizer = require('./app/DiceTokenizer.js');
var ExpressionTreeBuilder = require('./app/ExpressionTreeBuilder.js');
var TreeVisitor = require('./app/TreeVisitor.js');

function DiceExpression(strExpression) {
    this.strExpression = strExpression.toLowerCase();
}

DiceExpression.prototype.evaluate = function(){
    var diceTokenizer = new DiceTokenizer(this.strExpression);   
    var tokens = diceTokenizer.tokenize();
    
    var treeBuilder = new ExpressionTreeBuilder(tokens);
    var tree = treeBuilder.buildTree();

    var treeVisitor = new TreeVisitor(tree);
    var result = treeVisitor.traverse();
    console.log(result);
}

module.exports = DiceExpression;