/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxArray = [];
    const max = candies.reduce((a, b) => a > b ? a: b);
    for (candy of candies) {
        maxArray.push((candy + extraCandies) >= max);
    }
    return maxArray;
};
