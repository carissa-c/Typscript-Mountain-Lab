"use strict";
exports.__esModule = true;
var mountains = [
    {
        Name: "Kilimanjaro",
        Height: 19341
    },
    {
        Name: "Everest",
        Height: 29029
    },
    {
        Name: "Denali",
        Height: 20310
    }
];
function findNameOfTallestMountain(mt) {
    var tallestMt = mountains[0];
    mt.forEach(function (m) {
        if (m.Height > tallestMt.Height) {
            tallestMt = m;
        }
    });
    return tallestMt.Name;
}
var mName = findNameOfTallestMountain(mountains);
console.log(mName);
var products = [
    {
        name: "Wings",
        price: 8
    },
    {
        name: "Chocolate",
        price: 2
    },
    {
        name: "Gatorade",
        price: 3
    }
];
//return average
function calcAverageProductPrice(p) {
    var sum = 0;
    p.forEach(function (e) {
        sum += e.price;
    });
    var average = sum / p.length;
    return average;
}
var pAverage = calcAverageProductPrice(products);
console.log(pAverage);
var inventory = [
    {
        product: {
            name: "Motor",
            price: 10
        },
        quantity: 10
    },
    {
        product: {
            name: "Sensor",
            price: 12.50
        },
        quantity: 4
    },
    {
        product: {
            name: "LED",
            price: 1
        },
        quantity: 20
    },
];
console.log(inventory);
//Inventory
