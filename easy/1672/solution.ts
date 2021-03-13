function maximumWealth(accounts: number[][]): number {
    let wealth: number = 0;
    accounts.forEach((account: number[]) => {
        const sum: number = account.reduce((localsum, el) => {
            return localsum + el;
        });
        if (wealth < sum) {
            wealth = sum;
        }
    })
    return wealth;
};
