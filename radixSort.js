function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }

console.log(getDigit(2345, 2));

const digitCount = (num) => {
  return num.toString().length;
};

console.log(digitCount(23124));

const mostDigits = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    max = Math.max(max, digitCount(arr[i]));
  }
  return max;
};

console.log(mostDigits([9, 35, 4465, 545643, 36]));

const radixSort = (arr) => {
  let maxDigits = mostDigits(arr);

  for (let i = 0; i < maxDigits; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      buckets[digit].push(arr[j]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
};

console.log(radixSort([9, 35, 4465, 545643, 36]));
