function TreeVisitor(tree){
    this.tree = tree;
}

TreeVisitor.prototype.traverse = function(){
    return {max: calculateMax(), min: calculateMin(), rolls: calculateRolls()]};
}

TreeVisitor.prototype.calculateMax = function(){
    var sum = 0;
    var operator;
    
    visit(this.tree, function(treeNode){
        var value = treeNode.value;
        if (value == '+' || value == '-'){
            operator = value;
        } else if (value == 'd'){
            if (operator == '+'){
                sum += treeNode.left * treeNode.right;
            } else {
                sum -= treeNode.left * treeNode.right;
            }
        } else {
            if (operator == '+'){                
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

    visit(this.tree, function(treeNode){
        var value = treeNode.value;
        if (value == '+' || value == '-'){
            operator = value;
        } else if (value == 'd'){
            if (operator == '+'){
                sum += treeNode.left;
            } else {
                sum
            }
        }
    });
}


TreeVisitor.prototype.visit = function(treeNode, visitorFunc){
    if (typeof treeNode.left !== 'undefined'){
        visit(treeNode.left, visitorFunc);
    }

    visitorFunc(treeNode);

    if (typeof treeNode.right !== 'undefined'){
        visit(treeNode.right, visitorFunc);
    }
}

module.exports = TreeVisitor;