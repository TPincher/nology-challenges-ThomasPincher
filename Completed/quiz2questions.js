const coordinates = [];

const getCoordinates = (n = 10) => {
    while (coordinates.length < n + 1) {
        const coord = Math.ceil(Math.random() * (n + 1));
        if (coordinates.includes(coord)) continue;
        coordinates.push(coord);
    }
}

getCoordinates(10)
console.log(coordinates)

// getCoordinates(45)
// console.log(coordinates)

// getCoordinates(23)
// console.log(coordinates)

// 45 is out of bounds. You can solve this by changing the "45" to "n+1" 



const person = { name: 'Allen'};
console.log(`${('' + person.age).slice(4, 6)}nance`)
console.log(person.age)

// The 'fi' comes from the slice (4, 6) of 'undefined'


const firstName = "Aiden";
let i = 0;
let byteSum = 0 ;

while (i++ < firstName.length-1) {
    byteSum += firstName.charCodeAt(i);
}

console.log(byteSum);


// Aiden length is 5. charCodeAt uses zero-based indexing, so trying to convert index 5 results in an NaN. Solve by chaning firstName.length to firstName.length-1