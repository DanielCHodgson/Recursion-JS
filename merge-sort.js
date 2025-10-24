function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  } else {
    const middle = Math.floor(array.length / 2);
    const firstHalf = array.slice(0, middle);
    const secondHalf = array.slice(middle);

    const sortedA = mergeSort(firstHalf);
    const sortedB = mergeSort(secondHalf);

    const result = [];
    let i = 0;
    let j = 0;

    while (i < sortedA.length && j < sortedB.length) {
      result.push(sortedA[i] < sortedB[j] ? sortedA[i++] : sortedB[j++]);
    }

    while (i < sortedA.length) result.push(sortedA[i++]);
    while (j < sortedB.length) result.push(sortedB[j++]);

    return result;
  }
}

console.log(mergeSort([1, 122, 4, 5, 8, 56, 3, 0, 9, 203, 4, -36, -2, 7]));
