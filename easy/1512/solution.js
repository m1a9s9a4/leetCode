/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let pair = 0;
    nums.forEach((num, key) => {
        
    })
    for (let i=0; i<nums.length; i++) {
        for (let j=1; j<nums.length; j++) {
            if (nums[i] == nums[j] && i < j) {
                pair++;
            }
        }
    }
    return pair;
};
