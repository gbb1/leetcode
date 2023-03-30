

function insertionSort(array) {

  for (let x = 0; x < array.length; x++) {

    let i = x;
    let j = x + 1;

    if (array[j]) {
      while (array[j] < array[i] && i > 0) {
        let saveJ = array[j];
        array[j] = array[i];
        array[i] = saveJ;

        i--;
        j--;
      }
    }
  }

  return array;

}

console.log(insertionSort([1,5,2,4,3]));

console.log(insertionSort([1,1,2,1,3]));