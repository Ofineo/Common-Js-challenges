function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
}

function bubbleSort(array) {
  let noSwaps;
  for (let i = array.length - 1; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j != i - 1; j++) {
      if (array[j] > array[i]) {
        array = swap(array, j, i);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return array;
}

console.log(bubbleSort([2, 5, 43, 8, 3, 10, 45, 63]));
