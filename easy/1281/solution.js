/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let array = n.toString().split('');
    const sumReducer = (c, current) => Number(c) + Number(current);
    
    const productReducer = (c, current) => Number(c) * Number(current);
    
    const sum = array.reduce(sumReducer)
    const product = array.reduce(productReducer)
    return product - sum
};
