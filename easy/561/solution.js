var arrayPairSum = function(nums) {
    return nums.sort((a, b) => a - b).reduce((acc, current, index) => {
        return index % 2 === 0 ? acc + current : acc;
    }, 0);
};
