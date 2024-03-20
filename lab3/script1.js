// Шаг 1: Создание массива объектов товаров
let products = [
  {name:"apple", count: 5, price: 70},
  {name:"orange", count: 10, price: 90}
];

// Шаг 2: Подсчет общей стоимости товаров с использованием метода forEach
let totalCost = 0;
products.forEach(product => {
    totalCost += product.count * product.price;
});

// Шаг 3: Создание объекта с исходными данными и результатом подсчета
let resultObject = {
  bill: products,
  result: totalCost
};

// Шаг 4: Вывод результата в консоль при помощи JSON.stringify
console.log(JSON.stringify(resultObject));

// Шаг 5: Вывод текущей даты и времени
let currentDate = new Date();
console.log(currentDate);