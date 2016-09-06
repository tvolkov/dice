function TreeVisitor(tree){
    this.tree = tree;
}

TreeVisitor.prototype.traverse = function(){
    var result = {max: undefined, min: undefined, rolls: []]};
    return traverseTree(this.tree, result);
}

TreeVisitor.prototype.traverseRecursive = function(tree, result){
    var value = tree.value;
    if (value == '+'){
        return traverseRecursive(tree.left) + traverseRecursive(tree.right, result);
    } else if (value == '-'){
        return traverseRecursive(tree.left) - traverseRecursive(tree.right, result);
    } else if (value == 'd'){
        evaluateDice(tree.left, tree.right, result);
    } else {
        return value;
    }
}

module.exports = TreeVisitor;