// function sayHi() {
//     console.log("Hello World");
// }

// function sayHell() {
//     console.log("Goodbye world");
// }

// let h2dom = document.getElementById('title');

// h2dom.addEventListener('mouseover', () => {
//     h2dom.style.background = "linear-gradient(to right, red, orange, white)";
// })

// h2dom.addEventListener('mouseleave', () => {
//     h2dom.style.background = "white";
// })

// let nameInput = document.getElementById("name");
// let pwInput = document.getElementById("password");

// function logIn(){
//     let name = nameInput.value;
//     let password = pwInput.value;
//     if (name && password){
//         console.log(`User: ${name}`);
//         console.log(`Password: ${password}`);
//         nameInput.value = "";
//         pwInput.value = "";
//         window.location = "https://github.com/";
//         window.location.href = "https://github.com/";
//         window.location.replace("https://github.com/");
//     }
//     else{
//         console.log("You must fill in both name and password");
//     }
// }

// function printEvent(e, t){
//     console.log(e);
//     console.log(t);
// }

// function enterLogin(e){
//     if (e.key === "Enter"){
//         logIn();
//     }
// }

let phoneNameInput = document.getElementById("phone-name");
let addBtn = document.getElementById("addBtn");
let phoneListDom = document.getElementById("phone-list");
let phoneList = [];

function addPhone(){
    let newPhone = phoneNameInput.value;
    if (newPhone){
        phoneList.push(newPhone);
    }
    phoneNameInput.value = "";
    displayPhoneList(phoneList);
}

function displayPhoneList(phoneList){
    phoneListDom.innerHTML = "";
    for (let i = 0 ; i < phoneList.length ; i++){
        phoneListDom.innerHTML += `<li>${phoneList[i]}</li>`;
    }   
}