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
}

let a = new BinarySearchTree();
a.insert(10);
a.insert(11);
a.insert(9);
a.find(9);
