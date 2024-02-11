function luckyNumbers (matrix: number[][]): number[] {
    let largestArray: number[] = [];
    let smallestArray: number[] = [];
    matrix.forEach((m:number[], mi:number) => {
        let smallest: number | null = null;
        smallestArray.push(Math.min.apply(null, m))
        m.forEach((n:number, ni:number) => {
            if (!largestArray[ni] || largestArray[ni] < n) {
                largestArray[ni] = n
            }
        })
    });
    const max = Math.max.apply(null, smallestArray);
    return largestArray.filter(l => l === max);
};
