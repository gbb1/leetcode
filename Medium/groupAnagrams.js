/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

  // helper function to check if anagram
  // sort string, check if string exists in hash, if so, add unsorted to array at key, else add array of 1 at key
  let agrams = {};

  strs.forEach((str) => {
      let sorted = str.split('').sort().join('');

      if (sorted in agrams) {
          agrams[sorted] = agrams[sorted].concat(str);
      } else {
          agrams[sorted] = [str];
      }
  })

  return Object.values(agrams);

};