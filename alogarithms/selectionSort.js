function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  return arr;
}

function selectionSort(array) {
  let min;
  for (let i = 0; i < array.length; i++) {
    min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) min = j;
    }
    if (min !== i) array = swap(array, min, i);
  }
  return array;
}

console.log(selectionSort([2, 5, 43, 8, 3, 10, 45, 63]));
