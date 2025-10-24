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

function fibsrec(seq) {
  //console.log("This was printed recursively: " + seq);
  if (seq <= 0) {
    return [0];
  } else if (seq === 2) {
    return [0, 1];
  }

  const array = fibsrec(seq - 1);
  //console.log(seq + ": " + array);
  array.push(array[array.length - 1] + array[array.length - 2]);
  return array;
}

console.log(fibsrec(12));
