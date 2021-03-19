/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    let count = 0;
    let start = num;
    while(start > 0) {
        count = count + 1;
        if (start % 2 == 0) {
            start = start / 2
            continue;
        }
        start--;
    }
    return count;
};
