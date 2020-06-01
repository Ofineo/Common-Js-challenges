class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.tail = null;
    this.head = null;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;

    let removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      removedNode.prev = null;
      this.tail.next = null;
    }
    this.length--;
    return removedNode;
  }
  shift() {
    if (!this.head) return undefined;
    let removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
    }
    this.length--;
    return removedNode;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count, currentNode;
    if (index <= this.length / 2) {
      count = 0;
      currentNode = this.head;
      while (count !== index) {
        currentNode = currentNode.next;
        count++;
      }
    } else {
      count = this.length - 1;
      currentNode = this.tail;
      while (count !== index) {
        currentNode = currentNode.prev;
        count--;
      }
    }
    return currentNode;
  }
  set(index, val) {
    let node = this.get(index);
    if (node != null) {
      node.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return !!this.unshift(val);
    if (index == this.length) return !!this.push(val);

    let newNode = new Node(val);
    let prevNode = this.get(index - 1);

    newNode.next = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next.prev = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return !!this.shift();
    if (index == this.length - 1) return !!this.pop();

    let removedNode = this.get(index);
    let prevNode = removedNode.prev;
    let nextNode = removedNode.next;

    nextNode.prev = prevNode;
    prevNode.next = nextNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return true;
  }
  reverse() {
    if (!this.head) return null;
    if (this.length === 1) return this;

    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    for (let i = 0; i < this.length; i++) {
      let nodeNext = node.next;
      node.next = node.prev;
      node.prev = nodeNext;

      node = node.prev;
    }

    return this;
  }
  print() {
    if (!this.head) return null;
    let node = this.head;

    while (node) {
      console.log(node.val);
      node = node.next;
    }
  }
}

let a = new DoublyLinkedList;
a.push(1);
a.push(2);
a.push(3);
a.print()
a.reverse();