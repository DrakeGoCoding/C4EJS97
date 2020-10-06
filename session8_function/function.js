function sayHi(name){
    console.log(`${name} says hi!`);
}

function compute(a, b){
    console.log(`${a} + ${b} = ${a + b}`);
    console.log(`${a} - ${b} = ${a - b}`);
    console.log(`${a} * ${b} = ${a * b}`);
    console.log(`${a} / ${b} = ${a / b}`);
}

function sumOfPositiveUntil(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

function factorial(num) {
    if (num === 0 || num === 1) return 1;
    else return N * factorial(N - 1);
}

function divisorList(num) {
    let list = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            list.push(i);
        }
    }
    return list;
}

function isPrime(num) {
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function primeNumberListUntil(num) {
    let list = [];
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            list.push(i);
        }
    }
    return list;
}

function arraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function maxElement(array) {
    return Math.max.apply(null, array);
}

function minElement(array) {
    return Math.min.apply(null, array);
}

function listLowerThan(array, limit) {
    return array.filter(elem =>
        elem < limit
    );
}

function intersectionSet(array1, array2) {
    return array1.filter((elem, index) =>
        array1.indexOf(elem) === index &&
        array2.indexOf(elem) !== -1
    );
}

function unionSet(array1, array2) {
    let set = array1.concat(array2);
    return set.filter((elem, index) =>
        set.indexOf(elem) === index
    );
}

let arr1 = [2, 0, 1, 8, 4, 2, 8, 8];
let arr2 = [9, 7, 0, 4, 1, 5, 1, 3, 0, 0, 8, 5, 5, 9, 2, 2];
console.log(intersectionSet(arr1, arr2));
console.log(unionSet(arr1, arr2));