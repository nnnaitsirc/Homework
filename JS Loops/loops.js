let myArrayNumbers = [1,4,5,7,9,10];

function averageSumNumbers(myArrayNumbers) {
    let averageSum = 0;

for (let i = 0; i < myArrayNumbers.length; i++) {
        averageSum += myArrayNumbers[i];
        console.log(averageSum);
    }
    
    return averageSum/myArrayNumbers.length;
}

const results = averageSumNumbers(myArrayNumbers)
console.log(results )

//------------------------------------------------------------------
// Suma tuturor numerelor dintr-un array
let myArray = [true, 1,3,5,6, false, "string1"]; 
let numbersArraySum = 0;

for (let i = 0; i < myArray.length; i++) {
    if(typeof myArray[i] === "number") {
        numbersArraySum += myArray[i];
}
 console.log(numbersArraySum)
}

//Fibonnaci Sequence attempt

let sequence = [1,1]; 

for (let i = 0 ; i < 18; i++) { 
    let nextNumber = 0;
    nextNumber = sequence[i] + sequence[i+1];
    sequence.push(nextNumber);
}

console.log(sequence)
