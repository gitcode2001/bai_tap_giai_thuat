function sortStringByFrequency(str) {
    const freqMap = new Map();
    const orderMap = new Map();
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (!freqMap.has(char)) {
            freqMap.set(char, 0);
            orderMap.set(char, i);
        }
        freqMap.set(char, freqMap.get(char) + 1);
    }
    return str.split('').sort((a, b) => {
        if (freqMap.get(b) !== freqMap.get(a)) {
            return freqMap.get(b) - freqMap.get(a);
        }
        return orderMap.get(a) - orderMap.get(b);
    }).join('');
}
console.log(sortStringByFrequency("tree"));

// tạo freqMap để lưu tần suất xuất hiện của kí tự
//tạo order lưu thứ tự suất hiện của từng kí tự
//cho duyệt qua từng kí tự trong chuỗi và cập nhật trong 2 map
//nếu chưa có thì cho xuất hiện ở trong freqMap và thêm vào và đặt tần suất ban đầu là 0.
// đồng thời lưu vào vị trí kí tự suất hiện vào trong order map
// cập nhật  lại tần suât xuất hiện của ki tự trong freqMap
// Sắp xếp ký tự theo tần suất giảm dần,freqMap.get(b) - freqMap.get(a);
// nếu bằng nhau thì giữ nguyên thứ tự xuất hiện (orderMap.get(a) - orderMap.get(b)).


// cách 2: vòng lăp
function sortStringByFrequency(str) {
    const freq = {};  // Lưu tần suất
    const order = {}; // Lưu thứ tự xuất hiện

    // Bước 1: Đếm tần suất và lưu thứ tự xuất hiện
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        freq[char] = (freq[char] || 0) + 1;
        if (!(char in order)) order[char] = i;
    }

    // Bước 2: Chuyển các ký tự vào một mảng để sắp xếp thủ công
    let chars = str.split('');

    // Bước 3: Sắp xếp bằng vòng lặp for (Selection Sort)
    for (let i = 0; i < chars.length - 1; i++) {
        for (let j = i + 1; j < chars.length; j++) {
            if (
                freq[chars[j]] > freq[chars[i]] ||
                (freq[chars[j]] === freq[chars[i]] && order[chars[j]] < order[chars[i]])
            ) {
                // Hoán đổi ký tự nếu cần
                let temp = chars[i];
                chars[i] = chars[j];
                chars[j] = temp;
            }
        }
    }

    return chars.join('');
}

console.log(sortStringByFrequency("tree"));






