function DiceExpression(strExpression) {
    this.strExpression = strExpression.toLowerCase();
    this.tree = this.parseExpression();
}

DiceExpression.prototype.print = function(){
    console.log(this.strExpression);
}

DiceExpression.prototype.isExpressionValid = function(){
    return /"^([0-9]*)d([1-9]+|%)$"/.test(this.strExpression);    
}

DiceExpression.prototype.parseExpression = function(){
    if (!this.isExpressionValid()){
        throw new Error("invalid expression");
    }
    var expression = this.strExpression.replace(/\s+/g, '');
    var operandStart = 0;
    var operand;

    for (var i = 0; i < expression.length; i++){
        var char = expression.charAt(i).toLowerCase();

        if (char == '+' || char == '-'){
            operand = expression.substring(operandStart, i);
            operandStart = i + 1;
        }
    }
}

module.exports = DiceExpression;