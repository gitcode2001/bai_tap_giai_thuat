function maxKadaneSum(nums) {
    let maxSum = nums[0]; // tổng lớn nhất
    let currentSum = 0; // tổng của con
    for (let num of nums) {
        currentSum += num; // cộng giá trị hiện tại vào tổng
        maxSum = Math.max(maxSum, currentSum);// cạp nhật lại giá trị lớn nhất
        if (currentSum < 0) {
            currentSum = 0; // đăt lại 0  nếu tổng âm
        }
    }
    return maxSum;
}
console.log(maxKadaneSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));


//vòng lặp for
function maxKadaneSum(nums) {
    let maxSum = nums[0]; // Tổng lớn nhất
    let currentSum = 0; // Tổng của dãy con hiện tại

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i]; // Cộng giá trị hiện tại vào tổng
        maxSum = Math.max(maxSum, currentSum); // Cập nhật giá trị lớn nhất

        if (currentSum < 0) {
            currentSum = 0; // Đặt lại 0 nếu tổng bị âm
        }
    }
    return maxSum;
}

console.log(maxKadaneSum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
