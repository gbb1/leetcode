/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

var dailyTemperatures = function(temperatures) {

  let stack = [];
  let out = new Array(temperatures.length).fill(0);
  let memo = {};

  for (let i = temperatures.length - 1; i > -1; i--) {
      let count = 0;
      while (stack.length > 0) {
          if (stack[stack.length - 1][0] <= temperatures[i]) {
              stack.pop();
          } else {
              break;
          }
      }
      out[i] = stack.length === 0 ? 0 : stack[stack.length - 1][1] - i;
      stack.push([temperatures[i], i]);
  }
  return out;
};