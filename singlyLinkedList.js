class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.tail = 0;
    this.head = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let node = this.head;
    let oldTail;
    while (node) {
      if (node.next == this.tail) {
        oldTail = this.tail;
        node.next = null;
        this.tail = node;
        this.length--;
        return oldTail;
      }
      node.next;
    }
  }
}

let a = new SinglyLinkedList;
a.push(1);
a.push(12);
console.log(a.head.val, a.head.next.val);

console.log(a.pop());
console.log(a);
