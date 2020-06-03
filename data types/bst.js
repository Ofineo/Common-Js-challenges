class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let node = this.root;
    while (true) {
      if (newNode.val === node.val) return null;
      if (newNode.val < node.val) {
        if (node.left == null) {
          node.left = newNode;
          return this;
        } else {
          node = node.left;
        }
      } else if (newNode.val > node.val) {
        if (node.right == null) {
          node.right = newNode;
          return this;
        } else {
          node = node.right;
        }
      }
    }
  }
  find(val) {
    if (!this.root) return null;
    let currentNode = this.root;

    while (currentNode) {
      if (val === currentNode.val) return currentNode;

      if (val < currentNode.val) {
        if (!currentNode.left) return null;
        currentNode = currentNode.left;
      }
      if (val > currentNode.val) {
        if (!currentNode.right) return null;
        currentNode = currentNode.right;
      }
    }
  }

  breadSearchFirst() {
    let queue = [];
    let values = [];
    let node = this.root;

    queue.push(node);

    while (queue.length > 0) {
      node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      values.push(node.val);
    }
    return values;
  }
  depthFirstSearchPreOrder() {
    let values = [];
    let node = this.root;
    function traverse(node) {
      values.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(node);
    return values;
  }
  depthFirstSearchPostOrder() {
    let values = [];
    let node = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      values.push(node.val);
    }
    traverse(node);
    return values;
  }
  depthFirstSearchInOrder() {
    let values = [];
    let node = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      values.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(node);
    return values;
  }

}

//    10
//  9    11
//5         65
//  8     22  73

let a = new BinarySearchTree();
a.insert(10);
a.insert(11);
a.insert(9);
a.insert(5);
a.insert(65);
a.insert(22);
a.insert(8);
a.insert(73);
a.find(9);
a.depthFirstSearchInOrder();
