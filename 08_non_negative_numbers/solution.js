const firstMissingPositive = (nums) => {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]]; // Swap values
        } else {
            i++;
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    
    return nums.length + 1;
}

// Test the function
console.log(firstMissingPositive([3, 4, -1, 1])); // Output: 2
console.log(firstMissingPositive([1, 2, 3]));    // Output: 4
