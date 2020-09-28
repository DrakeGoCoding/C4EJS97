let directory = [
    {
        name: "Realme 7",
        price: 6.99e6,
        brand: "Realme"
    },
    {
        name: "Vsmart Aris Pro",
        price: 9.99e6,
        brand: "Vsmart"
    },
    {
        name: "Samsung Galaxy Note 10+",
        price: 16.49e6,
        brand: "Samsung"
    },
    {
        name: "iPhone 11 Pro Max 64GB",
        price: 33.99e6,
        brand: "Apple"
    },
    {
        name: "OPPO Reno3",
        price: 7.49e6,
        brand: "OPPO"
    },
    {
        name: "iPhone 11 64GB",
        price: 21.99e6,
        brand: "Apple"
    },
    {
        name: "Samsung Galaxy A21s",
        price: 5.39e6,
        brand: "Samsung"
    },
    {
        name: "Samsung Galaxy Note 20 Ultra",
        price: 29.99e6,
        brand: "Samsung"
    },
    {
        name: "Xiaomi Redmi 9",
        price: 3.99e6,
        brand: "Xiaomi"
    }
]

function printDirectory(directory) {
    console.log("****************************");
    for (let i = 0; i < directory.length; i++) {
        const phone = directory[i];
        console.log(`${i + 1}.`);
        for (const key in phone) {
            const value = phone[key];
            console.log(`${key}: ${value}`);
        }

    }
    console.log("****************************");
}

function addNewPhone(directory, name, brand, price) {
    let newPhone = [];
    newPhone["name"] = name
    newPhone["price"] = brand;
    newPhone["brand"] = price;
    directory.push(newPhone);
    printDirectory(directory);
    return directory;
}

function findPhoneByName(directory, name) {
    let phoneList = directory.filter(
        (phone) => {
            let phoneName = phone.name.toLowerCase();
            let keyLower = keyName.toLowerCase();
            return phoneName.indexOf(keyLower) !== -1;
        }
    )
    if (phoneList.length === 0)
        console.log("No appropriate phone is found!");
    else printDirectory(phoneList);
    return phoneList;
}

function findPhoneByBrand(directory, brand) {
    let phoneList = directory.filter(
        (phone) => {
            return phone.brand === brand;
        }
    )
    if (phoneList.length === 0) console.log("No appropriate phone is found!");
    else printDirectory(phoneList);
    return phoneList;
}

function findPhoneByMinPrice(directory) {
    let minPriceDirectory = directory.filter(
        (phone) => {
            let maxPrice = Math.min.apply(null, directory.map(
                function (phone) {
                    return phone.price;
                }
            ))
            return phone.price === maxPrice;
        }
    );
    printDirectory(minPriceDirectory);
    return minPriceDirectory;
}

function findPhoneByMaxPrice(directory) {
    let maxPriceDirectory = directory.filter(
        (phone) => {
            let maxPrice = Math.max.apply(null, directory.map(
                function (phone) {
                    return phone.price;
                }
            ))
            return phone.price === maxPrice;
        }
    );
    printDirectory(maxPriceDirectory);
    return maxPriceDirectory;
}

function findPhoneByMinPriceLimit(directory, minPrice) {
    let phoneList = directory.filter(
        (phone) => {
            return phone.price >= minPrice;
        }
    )
    if (phoneList.length === 0) console.log("No appropriate phone is found!");
    else printDirectory(phoneList);
    return phoneList;
}

function findPhoneByMaxPriceLimit(directory, maxPrice) {
    let phoneList = directory.filter(
        (phone) => {
            return phone.price <= maxPrice;
        }
    )
    if (phoneList.length === 0) console.log("No appropriate phone is found!");
    else printDirectory(phoneList);
    return phoneList;
}

// let name = prompt("Name");
// let price = Number(prompt("Price"));
// let brand = prompt("Brand")
// directory = addNewPhone(directory, name, price, brand);

// let priceLimit = Number(prompt("Enter a price limit"));
// let phoneList = findPhoneByMinPriceLimit(directory, priceLimit);
// printDirectory(directoryLimit);

// let keyName = prompt("Enter a key name: ");
// let phoneList = findPhoneByName(directory, keyName); 

// let appleDirectory = findPhoneByBrand(directory, "Apple");

// let minPriceDirectory = findPhoneByMinPrice(directory);
// let maxPriceDirectory = findPhoneByMaxPrice(directory);

// let keyName = prompt("Enter a key name");
// let maxPriceLimit = Number(prompt("Enter a max price limit"))
// let phoneList = findPhoneByName(directory, keyName);
// let filteredPhoneList = findPhoneByMaxPriceLimit(phoneList, maxPriceLimit);

// directory.sort(function(phone1, phone2){
//     return phone2.price - phone1.price;
// })
// printDirectory(directory);