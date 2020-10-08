let h1dom = document.getElementById('dom');
// console.dir(h1dom);
// console.log(h1dom.innerHTML);

h1dom.innerHTML = "ahihi";

let titles = document.getElementsByClassName('title');
console.dir(titles);
for (let i = 0 ; i < titles.length ; i++){
    const title = titles[i];
    title.innerHTML = h1dom.innerHTML;
}

let divDom = document.getElementById('content');
divDom.innerHTML = "<h1>We are bananas</h1>";

// let phones = [
//     'ios',
//     'android',
//     'google'
// ]

// let phoneDom = document.getElementById('phones');
// phoneDom.innerHTML = '';
// for (let i = 0 ; i < phones.length ; i++){
//     const phone = phones[i];
//     phoneDom.innerHTML += `<li>${phone}</li>`;
// }

let phones = [
    {
        name: 'Samsung Galaxy Note 10+',
        price: 16.49e6,
        img: "https://cdn.tgdd.vn/Products/Images/42/206176/samsung-galaxy-note-10-plus-171220-101247-400x400.jpg"
    },
    {
        name: 'iPhone 11 Pro Max 64GB',
        price: 30.99e6,
        img: "https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-400x400.jpg"
    },
    {
        name: 'Vivo V20',
        price: 8.49e6,
        img: "https://cdn.tgdd.vn/Products/Images/42/228453/vivo-v20-600-xanh-hong-200x200.jpg"
    }
]

let phoneDom = document.getElementById('phone-list');
phoneDom.innerHTML = '';
for (let i = 0 ; i < phones.length ; i++){
    const phone = phones[i];
    phoneDom.innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td>${phone.name}</td>
            <td>${phone.price}</td>
            <td><img src="${phone.img}"></img></td>
        </tr>
    `
}