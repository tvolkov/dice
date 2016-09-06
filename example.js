var DiceExpression = require('dice-tvolkov')

var dice = new DiceExpression("2d10 + d6 - 7 + 2").evaluate();
var dice = new DiceExpression("4d6 + 7").evaluate();
new DiceExpression("d%").evaluate();
new DiceExpression('d20').evaluate();
new DiceExpression('2d6').evaluate();
new DiceExpression('d% + 123').evaluate();
new DiceExpression('2d% - 4d5 -3656').evaluate();