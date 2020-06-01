class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return undefined;

    let currentfirst = this.first;
    this.first = currentfirst.next;
    currentfirst.next = null;
    this.size--;
    if (this.size === 0) this.last = null;
    return currentfirst.val;
  }
}
