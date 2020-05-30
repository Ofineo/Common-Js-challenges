const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  return arr;
};

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    for (let j = i - 1; j >= 0 && array[j] > array[i]; j--) {
      if (array[i] < array[j]) {
        array = swap(array, j, i);
        i -= 1;
      }
    }
  }
  return array;
};

console.log(insertionSort([2, 5, 43, 8, 3, 10, 45, 63]));
console.log(insertionSort([222, 5, 43, 8, 3, 10, 45, 63]));
