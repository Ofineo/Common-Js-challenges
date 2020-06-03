class Node {
  constructor(val, priority) {
    this.values = val;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val,prty) {
    let newNode = new Node(val,prty)
    this.values.push(newNode);
    if (this.values.length === 1) return true;

    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      let parent = this.values[parentIdx];
      if (parent.priority >= element.priority) return true;
      [this.values[parentIdx], this.values[index]] = [
        this.values[index],
        this.values[parentIdx],
      ];
      index = parentIdx;
    }
    return true;
  }
  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority > element.priority) swap = leftChildIdx;
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        )
          swap = rightChildIdx;
      }

      if (swap == null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
let a = new PriorityQueue();
a.enqueue('jordi\'s food', 5);
a.enqueue('buy protein', 4);
a.enqueue('wash dishes', 2);
a.enqueue('wash clothes', 1);
