const mergeArray = (array1, array2) => {
  let newArray = [];
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < array1.length && pointer2 < array2.length) {
    if (array1[pointer1] <= array2[pointer2]) {
      newArray.push(array1[pointer1]);
      pointer1++;
    } else {
      newArray.push(array2[pointer2]);
      pointer2++;
    }
  }
  while (pointer1 < array1.length) {
    newArray.push(array1[pointer1]);
    pointer1++;
  }
  while (pointer2 < array2.length) {
    newArray.push(array2[pointer2]);
    pointer2++;
  }

  return newArray;
};

console.log(
  mergeArray(
    [2, 6, 9, 11, 12, 18, 25, 26, 33],
    [2, 4, 7, 19, 21, 34, 35, 36, 43, 55]
  )
);

const mergeSort = (array) => {
  if (array.length <= 1) return array;
  let middle = Math.ceil(array.length / 2);
  let right = mergeSort(array.slice(0, middle));
  let left = mergeSort(array.slice(middle, array.length));
  return mergeArray(left, right);
};

console.log(mergeSort([2, 6, 9, 11, 12, 18, 25, 26, 33]));
