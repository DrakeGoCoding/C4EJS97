// var a;
// let b;

// a = 5;
// b = 10;

// console.log(a);
// console.log(b);

// a = 50;
// b = 100;

// console.log(a);
// console.log(b);

// const pi = 3.14;

// console.log(pi);

// var c = a + b;
// var d = a - b;
// var e = a * b;
// var f = a / b;
// var g = a % b;
// var h = Math.sqrt(a);
// var i = Math.pow(a, b); // or var i = a ** b;

// console.log(c, d, e, f, g, h, i);

var name = prompt("Enter name: ");
var year = parseInt(prompt("Enter birthyear: "));
var currentYear = new Date().getFullYear();
var age = currentYear - year;
console.log(`Hi ${name}, You're ${age}`); // console.log("Hi " + name + ", You're " + age);