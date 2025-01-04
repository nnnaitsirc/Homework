const myArray = [2,3,4,5,6,7,8,9,10,12,13,14,16]

const evenNumbers = (currentValue) => currentValue % 2;

console.log(myArray.every(evenNumbers));

myArray.forEach((element) => console.log(element));

const sumNumbers = 0

const sumArray = myArray.reduce((number, currentNumber) => number + currentNumber, sumNumbers)

console.log(sumArray);