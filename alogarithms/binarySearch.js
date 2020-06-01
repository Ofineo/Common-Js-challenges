function binarySearch(array, value) {
  let low = 0;
  let high = array.length - 1;
  let middle = 0;
  while (low <= high) {
    middle = Math.ceil((high + low) / 2);
    if (value == array[middle]) return middle;
    if (value < array[middle]) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12], 2));
console.log(binarySearch([1, 2, 3, 4, 5], 7));
