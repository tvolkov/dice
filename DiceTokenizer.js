function DiceTokenizer(strExpression){
    this.strExpression = strExpression;
}

DiceTokenizer.prototype.isExpressionValid = function(strExpression) {
    /^(([0-9]*)d([1-90-9]+|\%)((\+|\-)[1-9]+)*)+$/.test(this.strExpression);
    return true //todo fix the regex
}

DiceTokenizer.prototype.tokenize = function(){
     if (!this.isExpressionValid()){
        throw new Error("invalid expression");
    }
    var expression = this.strExpression.replace(/\s+/g, '');
    console.log(expression);
    var currentToken = '';

    var operands = [];
    var operators = [];

    for (var i = 0; i < expression.length; i++){
        var char = expression.charAt(i);
        if (!isNaN(char) || char == 'd'){
            currentToken += char;
        } else if (char === '+' || char === '-' /*|| char === 'd'*/){
            operators.push(char);
            /*if (char === 'd' && currentToken === ''){
                operands.push('1');
            } else*/ if (currentToken !== ''){
                operands.push(currentToken);    
            }
            currentToken = '';
        } else if (char == '%'){
            currentToken += '100'
            // operands.push(currentToken);
            // currentToken = ''
        }
    }

    if (currentToken.length > 0){
        operands.push(currentToken);
    }

    console.log(operands);
    console.log(operators);

    return {
        operands: operands,
        operators: operators
    }
}

module.exports = DiceTokenizer;