function ExpressionTreeBuilder(tokens){
    this.tokens = tokens;
}

ExpressionTreeBuilder.prototype.buildTree = function(){
    console.log('building expression tree');
    var operands = this.tokens.operands;
    var operators = this.tokens.operators;

    var currentOperand = 0;

    var tree = {value: undefined, left: undefined, right: undefined};

    for (var i = 0; i < operators.length; i++){
        // var treeNode = operators[i];
        // treeNode.left = operands[currentOperand++];
        // treeNode.right = operands[currentOperand++]
        // if (typeof tree == 'undefined'){
        //     tree = treeNode;
        // } else {
        //     tree.left = treeNode;
        // }

        //--------------------------------------------
        var treeNode = {value: operators[i], left: undefined, right: undefined};
        if (typeof tree.value == 'undefined' && typeof tree.left == 'undefined' && typeof tree.right == 'undefined'){
            console.log('tree is undefined');
            treeNode.left = operands[currentOperand++];
            treeNode.right = operands[currentOperand++]
            tree = treeNode;
            console.log('treenode'+treeNode);
        } else {
            if (treeNode.value == 'd'){
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