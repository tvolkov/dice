function TreeVisitor(tree){
    this.tree = tree;
}


// TreeVisitor.prototype.parseDice = function(diceStr) {
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
    var operator;
    
    this.visit(this.tree, function(treeNode){
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
                sum += value;
            } else {
                sum -= value;
            }
        }
    });

    return sum;
}

TreeVisitor.prototype.calculateMin = function(){
    var sum = 0;
    var operator;

    this.visit(this.tree, function(treeNode){
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
                sum += value;
            } else {
                sum -= value;
            }
        }
    });

    return sum;
}

TreeVisitor.prototype.calculateRolls = function(){
    var rolls = [];
    var operator;

    this.visit (this.tree, function(treeNode){
        var value = typeof treeNode.value !== 'undefined' ? treeNode.value : treeNode;
        if (value === '+' || value === '-'){
            operator = value;
        } else if (value === 'd'){
            var dice = parseDice(value);
            rolls.push(this.getRollsForDice(dice, operator));
        } else {
            if (operator === '+'){
                rolls.push(value);
            } else {
                rolls.push(value * -1);
            }
        }
    });

    return rolls;
}


TreeVisitor.prototype.visit = function(treeNode, visitorFunc){
    if (typeof treeNode.left !== 'undefined'){
        this.visit(treeNode.left, visitorFunc);
    }

    visitorFunc(treeNode);

    if (typeof treeNode.right !== 'undefined'){
        this.visit(treeNode.right, visitorFunc);
    }
}

TreeVisitor.prototype.getRollsForDice = function(dice, operator){
    var dice = dice.dice;
    var edges = dice.edges;

    var random = require("random-js")(); // uses the nativeMath engine
    var rolls = [];

    for (var i = 0; i < dice; i++){
        rolls.push(random.integer(1, edges));
    }

    return rolls;
}

TreeVisitor.prototype.traverse = function(){
    return {max: this.calculateMax(), min: this.calculateMin(), rolls: this.calculateRolls()};
}


module.exports = TreeVisitor;