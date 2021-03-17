class ParkingSystem {
    protected big = 0;
    protected medium = 0;
    protected small = 0;

    constructor(big: number, medium: number, small: number) {
        this.big = big;
        this.medium = medium
        this.small = small
    }

    addCar(carType: number): boolean {
        if (carType == 1) {
            this.big = this.big - 1;
            return this.big < 0 ? false : true;
        }
        
        if (carType == 2) {
            this.medium = this.medium - 1;
            return this.medium < 0 ? false : true;
        }
        
        if (carType == 3) {
            this.small = this.small - 1;
            return this.small < 0 ? false : true;
        }
        
        return false;
    }

}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
