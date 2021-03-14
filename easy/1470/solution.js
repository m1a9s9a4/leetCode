/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const firstHalf = nums.slice(0, n);
    const secondHalf = nums.slice(n, nums.length)
    let response = [];
    for (let i = 0; i < n; i++) {
        response.push(firstHalf[i]);
        response.push(secondHalf[i]);
    }
    return response;
};

module.exports = shuffle;