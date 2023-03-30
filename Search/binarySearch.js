// [1,2,3,4,5,6,7]

function arrayBinarySearch(array, value) {

  function findVal(left = 0, right = array.length - 1) {

    let middle = Math.floor((left + right) / 2);

    if (array[middle] === value) {
      return middle;
    }

    if (left === right) {
      return null;
    }

    if (array[middle] < value) {
      return findVal(middle + 1, right);
    }

    if (array[middle] > value) {
      return findVal(left, middle - 1);
    }

  }

  return findVal();

}


console.log(arrayBinarySearch([1,2,3,4,5], 6));