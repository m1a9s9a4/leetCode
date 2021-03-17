/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    const array = {
        'type': 0,
        'color': 1,
        'name': 2,
    };
    const target = array[ruleKey];
        
    let count = 0;
    
    items.map(item => {
        if (item[target] === ruleValue) count++;
    })
    
    return count;
};
