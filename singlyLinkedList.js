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
  shift() {
    if (!this.head) return undefined;

    let currentHead = this.head;
    this.head = currentHead.next;
    currentHead.next = null;
    this.length--;
    if (this.length === 0) this.tail = null;
    return currentHead;
  }
  unshift(val) {
    if (!this.head) {
      this.push(val);
    } else {
      let newNode = new node(val);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
    
    return this;
  }
}

//SinglyLinkedList testing
let a = new SinglyLinkedList();
a.push(1);
a.push(12);
console.log(a.head.val, a.head.next.val);

console.log(a.pop());
console.log(a);
//shifting test
console.assert(a.length == 1);
a.push(13);
a.push(23);
console.assert(a.length == 3);
a.shift();
console.assert(a.head.val == 13);
console.assert(a.tail.val == 23);
console.log(a.shift());
console.assert(a.length == 1);

console.log(a);
console.assert(a.head.val == 23);
console.assert(a.tail.val == 23);
