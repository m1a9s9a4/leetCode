<?php

class ParkingSystem {
    const BIG = 1;
    const MEDIUM = 2;
    const SMALL = 3;
    
    protected $parking = [];
    
    /**
     * @param Integer $big
     * @param Integer $medium
     * @param Integer $small
     */
    function __construct($big, $medium, $small) {
        $this->parking = [
            self::BIG => $big,
            self::MEDIUM => $medium,
            self::SMALL => $small,
        ];
        
    }
  
    /**
     * @param Integer $carType
     * @return Boolean
     */
    function addCar($carType) {
        if ($this->parking[$carType] === 0) {
            return false;
        }
        
        $this->parking[$carType] = $this->parking[$carType] - 1;
        return true;
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * $obj = ParkingSystem($big, $medium, $small);
 * $ret_1 = $obj->addCar($carType);
 */
