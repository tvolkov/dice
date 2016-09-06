function ExpressionTreeBuilder(tokens){
    this.tokens = tokens;
}

//this method constructs the simplest possible binary tree.
//the tree is not balanced, so traversing it will have poor 
//performance than if it would be balanced.
//Maybe it's worth to implement some self-balanced tree here, say red-black tree.
ExpressionTreeBuilder.prototype.buildTree = function(){
    var operands = this.tokens.operands;
    var operators = this.tokens.operators;

    var currentOperand = 0;

    var tree;

    for (var i = 0; i < operators.length; i++){

        var treeNode = {value: operators[i], left: undefined, right: undefined};

        if (typeof tree == 'undefined'){
            treeNode.left = operands[currentOperand++];
            treeNode.right = operands[currentOperand++]
            tree = treeNode;
        } else {
            if (treeNode.value == 'd'){
                treeNode.left = operands[currentOperand - 1];
                treeNode.right = operands[currentOperand++]
                tree.right = treeNode;
            } else {
                //JSON.parse(JSON.stringify(jsonObject)); is used to clone subtrees
                var tmpSubTree = JSON.parse(JSON.stringify(tree));
                treeNode.left = tmpSubTree;
                treeNode.right = operands[currentOperand++];
                tree = treeNode    
            }
        }
    }
    // console.log(tree);
    // console.log(JSON.stringify(tree));
    return tree;
}

module.exports = ExpressionTreeBuilder;