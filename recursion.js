function fibs(seq) {
  if (seq <= 0) {
    return [];
  } else if (seq === 1) {
    return [0];
  } else {
    const array = [0, 1];
    for (i = 1; i < seq - 1; i++) {
      array.push(array[array.length - 1] + array[array.length - 2]);
    }
    return array;
  }
}

console.log(fibs(12));
