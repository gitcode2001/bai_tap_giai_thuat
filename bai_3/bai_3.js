function mostFreqNum(nums) {
    let freqMap = new  Map();
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    let maxFreq = 0;
    let minElement = Infinity;
    for (let [num,fred]of freqMap) {
        if (fred > maxFreq || (fred === maxFreq && num < minElement)){
            minElement = num;
            maxFreq = fred;
        }
    }
    return minElement;
}

console.log(mostFreqNum([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5]));
// Map : Duyệt qua danh sách và đếm số lần xuất hiện của từng phần tử bằng freqMap.
//xong duyệt qua fredMap để tim phần tử có số làn suất hiên cao nhất và nếu có nhiều phần
//tử có cùng số  lần suất hiện thì chon số nhỏ hơn.


// vòng lặp
function mostFreqNum(nums) {
    let maxFreq = 0;
    let minElement = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let freq = 0;
        // tính tần số xuất hiện của phần tử nums[i] trong mảng nums.
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                freq++;
            }
        }
        // nếu số lần xuất hiện của phần tử hiện tại lớn hơn maxFreq
        // hoặc (nếu số lần xuất hiện giống maxFreq) và phần tử hiện tại nhỏ
        // hơn minElement thì update minElement và maxFreq.
        if (freq > maxFreq || (freq === maxFreq && nums[i] < minElement)) {
            minElement = nums[i];
            maxFreq = freq;
        }
    }
    return minElement;

}
console.log(mostFreqNum([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5]));