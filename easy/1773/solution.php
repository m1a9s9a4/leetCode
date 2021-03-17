<?php

class Solution {

    /**
     * @param String[][] $items
     * @param String $ruleKey
     * @param String $ruleValue
     * @return Integer
     */
    function countMatches($items, $ruleKey, $ruleValue) {
        $types = [
            'type' => 0,
            'color' => 1,
            'name' => 2,
        ];
        
        $count = 0;
        foreach ($items as $key => $item) {
            if ($item[$types[$ruleKey]] === $ruleValue) {
                $count++;
            }
        }
        
        return $count;
    }
}
