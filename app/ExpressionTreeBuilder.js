function ExpressionTreeBuilder(tokens){
    this.tokens = tokens;
}

//this method constructs the simplest possible binary tree.
//the tree is not balanced, so traversing it will have poor 
//performance than if it would be balanced.
//Maybe it's worth to implement some self-balanced tree here, say red-black tree.
//but that would only make sense for parsing huge expressions.
//for the majority of cases the current implementation is enough, I think
ExpressionTreeBuilder.prototype.buildTree = function(){
    if (!this.tokens || !this.tokens.operands || !this.tokens.operators){
        throw new Error('no tokens found');
    }

    var operands = this.tokens.operands;
    var operators = this.tokens.operators;


    var currentOperand = 0;

    var tree;

    if (operators.length == 0){ // we assume that in this case there's only one operand
        return {value: operands[0], left: undefined, right: undefined}; 
    }

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
    return tree;
}

module.exports = ExpressionTreeBuilder;