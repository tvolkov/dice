function TreeTraversal(tree){
    this.tree = tree;
}

TreeTraversal.prototype.traverse = function(){
    var result = {max: undefined, min: undefined, rolls: []]};
    return traverseTree(this.tree, result);
}

TreeTraversal.prototype.traverseRecursive = function(tree, result){
    var value = tree.value;
    if (value == '+'){
        return traverseRecursive(tree.left) + traverseRecursive(tree.right, result);
    } else if (value == '-'){
        return traverseRecursive(tree.left) - traverseRecursive(tree.right, result);
    } else if (value == 'd'){
        evaluate
    } else {
        return value;
    }
}

module.exports = TreeTraversal;