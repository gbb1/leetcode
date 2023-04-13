var TimeMap = function() {
  this.storage = {};
  this.latest = [];
};

/**
* @param {string} key
* @param {string} value
* @param {number} timestamp
* @return {void}
*/
TimeMap.prototype.set = function(key, value, timestamp) {
  const val = [timestamp, value];
  if (this.storage[key] === undefined) {
      this.storage[key] = [];
  }
  this.storage[key].push(val);
};

/**
* @param {string} key
* @param {number} timestamp
* @return {string}
*/
TimeMap.prototype.get = function(key, timestamp) {
  const array = this.storage[key];
  if (array === undefined) {
      return "";
  }
  function findPrev(left, right) {
      let mid = Math.floor((left + right) /2);
      let pair = array[mid];

      if (pair === undefined) {
          return "";
      }

      if (pair[0] === timestamp) {
          return pair[1];
      }

      if (pair[0] < timestamp) {
          if (!!array[mid + 1]) {
              if (array[mid + 1][0] <= timestamp) {
                  return findPrev(mid + 1, right);
              }
          }
          return pair[1];
      }

      if (pair[0] > timestamp) {
          if (left === right) {
              return '';
          }
          return findPrev(left, mid - 1);
      }
  }

  return findPrev(0, array.length - 1);
};