// cách 1
function reverseInteger(x) {
    const INT_MIN = -(2 ** 31); // -2^31
    const INT_MAX = 2 ** 31 - 1; // 2^31 - 1
    let reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    // Kiểm tra giới hạn 32-bit
    if (reversed > INT_MAX) return 0;

    return x < 0 ? -reversed : reversed;
}

// Kiểm thử
console.log(reverseInteger(123)); // Output: 321
console.log(reverseInteger(-123)); // Output: -321
console.log(reverseInteger(1534236469)); // Output: 0 (vượt quá giới hạn 32-bit)
// cách 2
function reverseInteger(x) {
    const INT_MIN = -(2 ** 31); // -2147483648
    const INT_MAX = 2 ** 31 - 1; // 2147483647
    let reversed = 0;

    while (x !== 0) {
        let digit = x % 10; // Lấy chữ số cuối
        x = Math.trunc(x / 10); // Cắt bỏ chữ số cuối

        // Kiểm tra tràn số trước khi cập nhật reversed
        if (reversed > INT_MAX / 10 || (reversed === INT_MAX / 10 && digit > 7)) return 0;
        if (reversed < INT_MIN / 10 || (reversed === INT_MIN / 10 && digit < -8)) return 0;

        reversed = reversed * 10 + digit; // Thêm chữ số vào kết quả
    }
    return reversed;
}

// Kiểm thử
console.log(reverseInteger(123));
console.log(reverseInteger(-123));
console.log(reverseInteger(120));
console.log(reverseInteger(1534236469));
