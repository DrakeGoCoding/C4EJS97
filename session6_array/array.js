let heights = [150, 155, 170, 145, 180];

// 1
for (let i = 0 ; i < heights.length ; i++){
    console.log(heights[i]);
}

// 2
let sum = 0;
let average;

for (let i = 0 ; i < heights.length ; i++){
    sum += heights[i];
}
average = sum / heights.length;
console.log(`Average height: ${average}`);

// 3
let higherThanAverage = heights.filter(height => height > average);
console.log(`Higher than average: ${higherThanAverage}`);

// 4
let maxHeight = Math.max.apply(null, heights);
let minHeight = Math.max.apply(null, heights);

console.log(`Max height: ${maxHeight}`);
console.log(`Min height: ${minHeight}`);

// 5
heights.sort();
console.log(`Ascending order: ${heights}`);
heights.sort((a, b) => b - a);
console.log(`Descending order: ${heights}`);

// 6
let lowerThan160 = heights.filter(height => height < 160);
console.log(`${lowerThan160.length} people are lower than 160cm: ${lowerThan160}`);
