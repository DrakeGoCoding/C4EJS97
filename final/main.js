function findOppositeNumber(n, inputNumber) {
    if (n % 2 !== 0 || inputNumber < 0 || inputNumber > n - 1) return null;
    return (inputNumber <= n / 2 - 1) ? (inputNumber + n /2) : (inputNumber - n / 2);
}

function merge2String(str1, str2) {
    if (str1.length === 0 || str2.length === 0) return str1.concat(str2);
    let arr1 = Array.from(str1);
    let arr2 = Array.from(str2);
    let resultArr = [];
    let i = 0, j = 0;
    while (i <= arr1.length || j <= arr2.length) {
        resultArr.push(arr1[i++]);
        resultArr.push(arr2[j++]);
    }
    return resultArr.join("");
}