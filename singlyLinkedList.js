class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkeList {
  constructor() {
    this.length = 0;
    this.tail = 0;
    this.head = 0;
  }
  push(val) {
    if (!head) {
      this.head = new Node(val);
      this.tail = new Node(val);
    } else {
      this.next = new Node(val);
      this.head = this.next;
    }
    this.length++;
    
  }
}
