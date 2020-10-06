// let name = 'Long';
// let age = 20;
// let array = [0, 1, 2];
// let info = {
//     name: 'Long',
//     age: 20
// }

// let infoJson = JSON.stringify(info);
// let nameJson = JSON.stringify(name);
// let ageJson = JSON.stringify(age);
// let arrayJson = JSON.stringify(array);

// console.log(nameJson, ageJson, arrayJson, infoJson);

let http = new XMLHttpRequest();
http.onreadystatechange = function(){
    if (this.readyState === 4 && this.status === 200){
        let data = JSON.parse(this.responseText);
        console.log(data);
    }
}

http.open('GET', 'https://weather-data-demo.herokuapp.com/get-weather-today');
http.send();