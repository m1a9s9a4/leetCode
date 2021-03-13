<?php
class Solution {

    /**
     * @param Integer[] $candies
     * @param Integer $extraCandies
     * @return Boolean[]
     */
    function kidsWithCandies($candies, $extraCandies) {
        $newArray = [];
        $greatest = max($candies);
        foreach ($candies as $candy) {
            $newArray[] = ($candy + $extraCandies) >= $greatest;
        }
        return $newArray;
    }
}
