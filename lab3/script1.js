
let products = [
  {name:"apple", count: 5, price: 70},
  {name:"orange", count: 10, price: 90}
];

totalCost = 0;
products.forEach(product => {
    totalCost += product.count * product.price;
});


let resultObject = {
  bill: products,
  result: totalCost
};

// Шаг 4: Вывод результата в консоль при помощи JSON.stringify
console.log(JSON.stringify(resultObject));

// Шаг 5: Вывод текущей даты и времени
let currentDate = new Date();
console.log(currentDate);