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
}
let a = new Heap();
a.insert(10);
a.insert(9);
a.insert(20);
a.insert(50);
a.insert(5);
