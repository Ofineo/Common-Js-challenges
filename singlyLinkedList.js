class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.tail = null;
    this.head = null;
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
      let newNode = new Node(val);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }

    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.val = value;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return !!this.unshift(val);
    if (index == this.length) return !!this.push(val);

    let prevNode = this.get(index - 1);
    let newNode = new Node(val);

    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return !!this.shift();
    if (index == this.length - 1) return !!this.pop();
    let prevNode = get(index - 1);
    let removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }
  reverse() {
    node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prevNode = null;
    let nextNode;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prevNode;
      prev = node;
      node = nextNode;
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

a.push(2);
a.get(1);
