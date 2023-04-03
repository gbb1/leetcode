

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // iterate through nums and count occurence of each num
    // => object with counts
    // map to an array then sort?

    let counts = {};

    nums.forEach((n) => {
        if (n in counts) {
            counts[n] ++;
        } else {
            counts[n] = 1;
        }
    })

    let keys = Object.keys(counts);
    let sorted = keys
        .map((key) => {
            return [key, counts[key]];
        })
        .sort((a, b) => {
            return b[1] - a[1];
        })

    let out = [];
    for (let i = 0; i < k; i++) {
        out.push(sorted[i][0]);
    }

    return out;

};