class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function runningSum($nums) {
        $current = null;
        $rslt = [];
        foreach($nums as $k => $num) {
            if (!$current) {
                $rslt[] = $num;
                $current = $num;
                continue;
            }
            
            $current = $current + $num;
            $rslt[] = $current;
        }
        return $rslt;
    }
}
