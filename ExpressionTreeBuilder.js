function ExpressionTreeBuilder(tokens){
    this.tokens = tokens;
}

ExpressionTreeBuilder.prototype.buildTree = function(){
    console.log('building expression tree');
    var operands = this.tokens.operands;
    var operators = this.tokens.operators;

    var currentOperand = 0;

    var tree;

    for (var i = 0; i < operators.length; i++){
        var treeNode = operators[i];
        treeNode.left = operands[currentOperand++];
        treeNode.right = operands[currentOperand++]
        if (typeof tree == 'undefined'){
            tree = treeNode;
        } else {
            tree.left = treeNode;
        }

        //--------------------------------------------
        var treeNode = operators[i];
        if (typeof tree == 'undefined'){
            treeNode.left = operands[currentOperand++];
            treeNode.right = operands[currentOperand++]
            tree = treeNode;
        } else {
            if (treeNode == 'd'){
                treeNode.left = operands[currentOperand - 1];
                treeNode.right = operands[currentOperand++]
                tree.right = treeNode;
            }
            var tmpSubTree = tree;
            treeNode.left = tmpSubTree;
            treeNode.right = operands[currentOperand++];
            tree = treeNode
        }


    }

    console.log(tree);
}

module.exports = ExpressionTreeBuilder;