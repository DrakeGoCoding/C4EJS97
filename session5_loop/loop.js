// for (let i = 0 ; i < 100 ; i++){
//     console.log(i);
// }

for (let i = 1 ; i <= 10 ; i++){
    console.log(i);
}

for (let i = 0 ; i <= 10 ; i++){
    if (i % 2 !== 0) console.log(i);
}

for (let i = 0 ; i <= 10 ; i++){
    if (i % 2 === 0) console.log(i);
}

for (let i = 10 ; i >= 10 ; i--){
    console.log(i);
}

let S = 0;
for (let i = 0 ; i <= 10 ; i++){
    S += i;
}
console.log(S);