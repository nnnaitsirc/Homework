let initialValues = ["Wantsome", 100, true, false, undefined];
let otherValues = ["Wantsome", 100, 200, true, false, undefined];

initialValues.push(otherValues);
// console.log(initialValues);

//Add +2 on each typeof number in initialValues 

for (let i = 0; i < initialValues.length; i++) {
    if (typeof initialValues[i] === "number") {
        initialValues[i] = initialValues[i] + 2;
        console.log(initialValues[i]);
    }
};

//concatenate each value in initialValues with "happy coding"

for (let i = 0; i < initialValues.length; i++) {
    if (typeof initialValues[i] === "string") {
        initialValues[i] = initialValues[i] + " happy coding"
        console.log(initialValues)
    }
}

// reverse all boolean values in initialValues array 

for (let i = 0; i < initialValues.length; i++) {
    if (typeof initialValues[i] === "boolean") {
        initialValues[i] = !initialValues[i];
        console.log(initialValues)
    }
}


