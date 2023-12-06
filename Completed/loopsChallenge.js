
function numberAdder(givenNumber) {
    let finalNumber = 0
    for (let i = 0; i <= givenNumber; i++) {
        finalNumber += i;
        console.log(finalNumber)
    }
    return finalNumber
}

console.log(numberAdder(10))