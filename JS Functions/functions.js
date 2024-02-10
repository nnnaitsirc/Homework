const firstSentence = `Ion castiga 5000 lei/luna din salariu, 10000 lei/an bonus si 1500 lei/luna din freelancing.`;
const secondSentence = `Andrei are un salariu de 1000 euro/luna, un bonus de 9000 lei/an, si mai castiga suplimentar aproximativ 500 usd/luna din freelancing`;


function computeIncome(string) {
    let splitSentence = string.split(" ");
    let name = splitSentence[0];
    let salaryAmounts = [];
    let annualIncome = 0;
    let result = " castiga ";

    for (let i = 1; i < splitSentence.length; i++) {
        let salary = parseInt(splitSentence[i]);
        // console.log(salary, isNaN(salary)); 
        if (!isNaN(salary)) {
            // console.log(salary, splitSentence[i+1]);
            salaryAmounts.push(salary,splitSentence[i+1])
        } 

    }

    for (let i = 0; i < salaryAmounts.length; i=i+2) {
        if (salaryAmounts[i+1] === "lei/an,") {
            annualIncome += salaryAmounts[i];
        }

        switch (salaryAmounts[i+1]) {
            case "lei/luna": {annualIncome += salaryAmounts[i] * 12;
                console.log(salaryAmounts[i] * 12);
                console.log(annualIncome)
                break}
            case "lei/an": {annualIncome += salaryAmounts[i];
                console.log(annualIncome)
                break}
            case "euro/luna,": {annualIncome += (salaryAmounts[i] * 12) * 4.97;
                console.log(salaryAmounts[i] * 12 * 4.97) 
                break}
            case "euro/an": {annualIncome += salaryAmounts[i] * 4.97;
                console.log(salaryAmounts[i] * 12 * 4.97)
                break}
            case "usd/luna": {annualIncome += (salaryAmounts[i] * 12) * 4.57;
                console.log(salaryAmounts[i] * 12)
                break;}
            case "usd/an": {annualIncome += salaryAmounts[i] * 4.57
                console.log(salaryAmounts[i] * 12)
                break};
        }
    } 
    console.log(name + " castiga " + annualIncome + " lei/an pe an.")
    // console.log(splitSentence)
    // console.log(salaryAmounts)
}

computeIncome(firstSentence);
console.log(firstSentence)
computeIncome(secondSentence)



