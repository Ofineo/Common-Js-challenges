class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total + prime + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, val) {
    let index = this._hash(key);
    if (this.keyMap[index] == undefined) {
      this.keyMap[index] = [{ [key]: val }];
    } else {
      this.keyMap[index].push({ [key]: val });
    }
    return this;
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index].length > 1) {
      for (let val of this.keyMap[index]) {
        if (val.hasOwnProperty(key)) return val[key];
        continue;
      }
    } else {
      return this.keyMap[index][0].hasOwnProperty(key)
        ? this.keyMap[index][0][key]
        : undefined;
    }
  }
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        if (this.keyMap[i].length > 1) {
          for (let k = 0; k < this.keyMap[i].length; k++) {
            keysArr.push(Object.keys(this.keyMap[i][k]));
          }
        } else {
          keysArr.push(Object.keys(this.keyMap[i][0]));
        }
      }
    }
    return keysArr;
  }
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        if (this.keyMap[i].length > 1) {
          for (let k = 0; k < this.keyMap[i].length; k++) {
            valuesArr.push(this.keyMap[i][k][Object.keys(this.keyMap[i][k])]);
          }
        } else {
          valuesArr.push(this.keyMap[i][0][Object.keys(this.keyMap[i][0])]);
        }
      }
    }
    let uniqueVal = new Set(valuesArr);
    return uniqueVal;
  }
}
let a = new HashTable(10);
a.set("jordi", 41);
a.set("Yidah", 40);
a.set("pollo", 67);
a.set("marcos", 43);
a.get("marcos");
a.keys();
