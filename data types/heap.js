class Heap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    if (this.values.length === 1) return true;

    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      let parent = this.values[parentIdx];
      if (parent >= element) return true;
      [this.values[parentIdx], this.values[index]] = [
        this.values[index],
        this.values[parentIdx],
      ];
      index = parentIdx;
    }
    return true;
  }
  extractMax() {
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
        if (leftChild > element) swap = leftChildIdx;
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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
let a = new Heap();
a.insert(10);
a.insert(9);
a.insert(20);
a.insert(50);
a.insert(5);
