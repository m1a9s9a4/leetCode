/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        if (jewels.includes(stones[i])) count++;
    }
    return count;
};

console.log('should be true....')
const a1 = numJewelsInStones('ab', 'cdf');
console.log(a1 === 0)

const a2 = numJewelsInStones('ab', 'aabb');
console.log(a2 === 4);

const a3 = numJewelsInStones('', '');
console.log(a3 === 0);

console.log('should be false....')
console.log(a1 === 1);
console.log(a2 === 2);
