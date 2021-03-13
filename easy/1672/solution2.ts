function maximumWealth(accounts: number[][]): number {
    let wealth: number = 0;
    return Math.max(...accounts.map(account => account.reduce((sum, num) => {
        return sum + num;
    })));
};
