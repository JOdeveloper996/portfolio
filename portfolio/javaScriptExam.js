function missingNumber(nums) {
    const n = nums.length;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = nums.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}

// Test cases
const nums1 = [3, 0, 1];
console.log(missingNumber(nums1)); // Output: 2

const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(missingNumber(nums2)); // Output: 8

const nums3 = [0, 1];
console.log(missingNumber(nums3)); // Output: 2
