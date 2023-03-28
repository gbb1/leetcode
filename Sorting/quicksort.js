

// [1,44,2,4,3]

function quickSort(array) {

  function sorter(arr) {

    const pivot = arr[0];

    if (arr.length <= 1) {
      return arr;
    }

    let left = [];
    let right = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    const Left = sorter(left);
    const Right = sorter(right);

    return Left.concat(pivot).concat(Right);

  }

  return sorter(array);

}


console.log(quickSort([1,44,2,5,3]));