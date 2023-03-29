

function insertionSort(array) {

  for (let i = 0; i < array.length; i++) {

    let j = i + 1;
    let x = i;

    if (array[j]) {
      while (array[j] < array[x] && x > 0) {
        let saveJ = array[j];
        array[j] = array[x];
        array[x] = saveJ;

        j--;
        x--;
      }
    }
  }

  return array;

}

console.log(insertionSort([1,5,2,4,3]));

console.log(insertionSort([1,1,2,1,3]));