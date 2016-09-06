function TreeVisitor(tree){
    this.tree = tree;
}

function parseDice(diceStr){
    var indexOfD = diceStr.indexOf('d');
    var numberOfDiceStr = diceStr.substring(0, indexOfD);
    var numberOfEdgesStr = diceStr.substring(indexOfD + 1);

    var numberOfDice = numberOfDiceStr == '' ? 1 : parseInt(numberOfDiceStr, 10);
    var numberOfEdges = parseInt(numberOfEdgesStr, 10);
    return {dice: numberOfDice, edges: numberOfEdges};
}

TreeVisitor.prototype.calculateMax = function(){
    var sum = 0;

    var operator = '+';

    visit(this.tree, function(treeNode){
        var value = typeof treeNode.value !== 'undefined' ? treeNode.value : treeNode;
        if (value === '+' || value === '-'){
            operator = value;
        } else if (value.indexOf('d') != -1){
            var dice = parseDice(value);
            var maxValue = dice.dice * dice.edges;
            if (operator === '+'){
                sum += maxValue;
            } else {
                sum -= maxValue;
            }
        } else {
            if (operator === '+'){                
                sum += parseInt(value, 10);
            } else {
                sum -= parseInt(value, 10);
            }
        }
    });
    return sum;
}

TreeVisitor.prototype.calculateMin = function(){
    var sum = 0;

    var operator = '+';

    visit(this.tree, function(treeNode){
        var value = typeof treeNode.value !== 'undefined' ? treeNode.value : treeNode;
        if (value === '+' || value === '-'){
            operator = value;
        } else if (value.indexOf('d') != -1){
            var dice = parseDice(value);
            var minValue = dice.dice;
            if (operator === '+'){
                sum += minValue;
            } else {
                sum -= minValue;
            }
        } else {
            if (operator === '+'){
                sum += parseInt(value, 10);
            } else {
                sum -= parseInt(value, 10);
            }
        }
    });

    return sum;
}

TreeVisitor.prototype.calculateRolls = function(){
    var rolls = [];
    
    var operator;

    visit (this.tree, function(treeNode){
        var value = typeof treeNode.value !== 'undefined' ? treeNode.value : treeNode;
        if (value === '+' || value === '-'){
            operator = value;
        } else if (value.indexOf('d') != -1){
            var dice = parseDice(value);
            rolls.push(getRollsForDice(dice, operator));
        } else {
            if (operator === '+'){
                rolls.push(parseInt(value, 10));
            } else {
                rolls.push(value * -1);
            }
        }
    });

    return rolls;
}


function visit(treeNode, visitorFunc) {
    if (typeof treeNode.left !== 'undefined'){
        visit(treeNode.left, visitorFunc);
    }

    visitorFunc(treeNode);

    if (typeof treeNode.right !== 'undefined'){
        visit(treeNode.right, visitorFunc);
    }
}

function getRollsForDice(inputDice, operator) {
    var numberOfDice = inputDice.dice;
    var edges = inputDice.edges;

    var random = require("random-js")(); // uses the nativeMath engine
    var rolls = [];

    for (var i = 0; i < numberOfDice; i++){
        rolls.push(random.integer(1, parseInt(edges, 10)));
    }

    return rolls;
}

TreeVisitor.prototype.traverse = function(){
    return {max: this.calculateMax(), min: this.calculateMin(), rolls: this.calculateRolls()};
}

module.exports = TreeVisitor;