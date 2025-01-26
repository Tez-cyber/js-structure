/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


const twoSum = (nums, target) => {
    const map = {};
    
    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if(map[complement] !== undefined) {
            return [map[complement], i];
        }

        map[nums[i]] = i;
    }

    return [];
}

const nums = [3, 2, 4];
const target = 6;

console.log(twoSum(nums, target));