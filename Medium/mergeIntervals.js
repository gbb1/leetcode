/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

  let out = [];
  intervals = intervals.sort((a,b) => {
      return a[0] - b[0];
  })

  for (let i = 0; i < intervals.length; i++) {

      let x = i;
      let merge = intervals[i];
      while (intervals[x+1] !== undefined && merge[1] >= intervals[x+1][0]) {
          if (intervals[x+1][1] < merge[0]) {
              break;
          }
          merge[1] = Math.max(merge[1], intervals[x+1][1]);
          merge[0] = Math.min(merge[0], intervals[x+1][0]);
          x++;
      }
      i = x;
      out.push(merge);

  }

  return out;

};