var BST =require('./BinarySearchTree/BSTOtherType.js');

var tree1 =  new BST;
tree1.add(50,50);
tree1.add(500,500);
tree1.add(3,3);
tree1.add(45,45);
tree1.add(45,45);


root = tree1._root;
console.log(root.left.data  + "----root--" + root.right.data);
tree1.inOrder();

var tree2 =  new BST();
tree2.add(5,3);

console.log(tree2.dan);