export {}

//interface
interface Mountain {
    Name:string;
    Height:number;
}

let mountains: Mountain[] = [
    {
        Name:"Kilimanjaro",
        Height: 19341
    },
    {
        Name:"Everest",
        Height: 29029
    },
    {
        Name:"Denali",
        Height: 20310
    }
]
 function findNameOfTallestMountain(mt: Mountain[]):string{
    let tallestMt:Mountain = mountains[0];

    mt.forEach((m: Mountain) => {
        if(m.Height > tallestMt.Height){
            tallestMt = m;
        }
    });

    return tallestMt.Name;

 }
 let mName:string = findNameOfTallestMountain(mountains);
 console.log(mName);


 //Product interface
interface Product {
    name:string;
    price:number;
}

let products: Product[] = [
    {
        name:"Wings",
        price: 8
    },
    {
        name:"Chocolate",
        price: 2
    },
    {
        name:"Gatorade",
        price: 3
    }
]

//return average
function calcAverageProductPrice(p: Product[]):number {
    let sum:number = 0;
    
   p.forEach ((e:Product) => {
    sum += e.price
});

let average:number = sum / p.length;
return average;

}

let pAverage:number = calcAverageProductPrice(products);
 console.log(pAverage);


interface InventoryItem {
    product: Product;
    quantity: number;
}

    let inventory: InventoryItem[] = [
    {
        product: {
            name: "Motor",
            price: 10,
        },
        quantity: 10
    },
    {
        product: {
            name: "Sensor",
            price: 12.50,
        },
        quantity: 4
    },
    {
        product: {
            name: "LED",
            price: 1,
        },
        quantity: 20
    },

 ]

console.log(inventory);





//return average
function calcInventoryValue(i: InventoryItem[]):number {
    let total:number = i.quantity * i.product.price;
    


}