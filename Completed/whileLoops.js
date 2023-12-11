let i = 0;
let numberlist = []

while (i<10) {
    number = Math.floor(Math.random() * 16);
    numberlist.push(number);
    i++;
}

console.log(numberlist)




function generateNumbers (n, r, isUnique) {

    let i = 0
    let generatedArray = []

    if (n < 0 || r < 0) {
        return ("please only use positive numbers")
    }
    if (n > r && isUnique == true) {
        return ("n must be greater than r")
    }
    while (i < n) {
        genNumber = Math.floor(Math.random() * r);
        if (isUnique == true && generatedArray.includes(genNumber)) {
            i--
        }
        else generatedArray.push(genNumber)
        i++
    }
    return generatedArray
}

console.log(generateNumbers(20,30, true))