function runningSum(nums: number[]): number[] {
    let current: number | null = null
    let result: number[] = [];
    for (let num of nums) {
        if (!current) {
            current = num;
            result.push(current);
            continue;
        }
        current = current + num;
        result.push(current);
    }
    return result;
};
