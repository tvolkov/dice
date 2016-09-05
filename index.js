require('node-import');


// include('dice/DiceTokenizer');
var DiceTokenizer = require('./DiceTokenizer.js');

function DiceExpression(strExpression) {
    this.strExpression = strExpression.toLowerCase();
    this.tree = this.parseExpression();
}

DiceExpression.prototype.isExpressionValid = function(){

}

DiceExpression.prototype.parseExpression = function(){
    var diceTokenizer = new DiceTokenizer(this.strExpression);   
    diceTokenizer.tokenize();
}

module.exports = DiceExpression;