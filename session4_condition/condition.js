// let num = Number(prompt("Enter a number"));
// if (num < 10){
//     console.log(`${num} < 10`);
// }
// else if (num > 10){
//     console.log(`${num} < 10`);
// }
// else{
//     console.log(`${num} = 10`);
// }

// let weight = parseFloat(prompt("Enter your weight (kg): "));
// let height = parseFloat(prompt("Enter your height (m): "));
// let bmi = weight / Math.pow(height, 2);

// if (bmi <= 0) console.log("Undefined");
// else if (bmi <= 15) console.log("Very severely underweight");
// else if (bmi <= 16) console.log("Severely underweight");
// else if (bmi <= 18.5) console.log("Underweight");
// else if (bmi <= 25) console.log("Normal");
// else if (bmi <= 30) console.log("Overweight");
// else if (bmi <= 35) console.log("Obese Class I");
// else if (bmi <= 40) console.log("Obese Class II");
// else console.log("Obese Class III");

function isLeapYear(year){
    if (year % 4 !== 0) return false;
    if (year % 100 === 0 && year % 400 !== 0) return false;
    return true;
}

function getDays(month, year){
    let num_of_days;
    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8: 
        case 10: 
        case 12: 
            num_of_days = 31;
            break;
        case 4: 
        case 6: 
        case 9: 
        case 11:
            num_of_days = 30;
            break;  
        case 2: 
            if (isLeapYear(year)) num_of_days = 29;
            else num_of_days = 28;
            break;
        default:
            break;
    }
    return num_of_days;
}

let year = parseInt(prompt("Enter a year: "));
let month = parseInt(prompt("Enter a month: "));

console.log(getDays(month, year));