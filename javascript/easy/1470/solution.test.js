const solution = require('./solution');

test('shuffle array', () => {
    expect(solution([3, 5, 4, 1], 2)).toStrictEqual([3, 4, 5, 1]);
    expect(solution([3, 5, 4, 1], 3)).not.toStrictEqual([3, 5, 4, 1]);
    expect(solution([3, 4, 5, 6, 4, 1], 3)).toStrictEqual([3, 6, 4, 4, 5, 1]);
})