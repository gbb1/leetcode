/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

  const binarySearch = (array, x, left, right) => {

      left = left === undefined ? 0 : left;
      right = right === undefined ? array.length - 1 : right;

      const mid = Math.floor((left + right) / 2);


      if (array[mid] === x) {
          return true;
      } else if (left >= right) {
          return false;
      } else if (array[mid] > x) {
          return binarySearch(array, x, left, mid - 1);
      } else {
          return binarySearch(array, x, mid + 1, right);
      }
  }

  const startSearch = (array, x, left, right, dir) => {
      left = left === undefined ? 0 : left;
      right = right === undefined ? array.length - 1 : right;

      const mid = Math.floor((left + right) / 2);

      if (array[0] > x) {
          return false;
      }

      if (array[mid] === x) {
          return true;
      }

      if (array[mid] < x) {
          if (array[mid + 1] !== undefined && array[mid + 1] <= x) {
              console.log('here');
              return startSearch(array, x, mid + 1, right);
          } else {
              console.log('mid');
              return mid;
          }
      } else {
          return startSearch(array, x, left, mid - 1);
      }

  }

  const rows = [];
  matrix.forEach((row) => {
      rows.push(row[0]);
  })

  const start = startSearch(rows, target);

  if (typeof start === 'number') {
      const arr = matrix[start];
      return binarySearch(arr, target);
  } else {
      return start;
  }

};