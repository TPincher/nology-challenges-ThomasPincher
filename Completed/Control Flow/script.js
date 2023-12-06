// let n = 1

// if (n % 2 == 0) {
//     console.log("n is even");
// } else if (n % 2 == 1 || n % 2 == -1) {
//     console.log("n is odd");
// } else {console.log("please enter a number")}




// const x = 5
// const y = 6

// if (x > y) {
//     console.log(`${x} is greater than ${y}`)
// } else if (y > x) {
//     console.log (`${x} is smaller than ${y}`)
// } else console.log(`${x} is equal to ${y}`)




// const userInput = 5

// if (typeof userInput == 'number') {
//     console.log(userInput ** 2);
// } else if (typeof userInput == 'string') {
//     console.log(userInput);
// } else console.log("invalid input")



const day = 2;

switch (day) {
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Please pick a number between 1 and 7")
}



const parent1 = "green";
const parent2 = "blue";

switch(parent1) {
    case "brown":
        switch (parent2) {
            case "brown":
                console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 6.25%, brown is 75%, and green is 18.75%`);
                break;
            case "blue":
                console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 50%, brown is 50%, and green is 0%`);
                break;
            case "green":
                console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 12.5%, brown is 50%, and green is 37.5%`)
                break;
        }
        break;
    case "green":
        switch (parent2) {
            case "brown":
                console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 12.5%, brown is 50%, and green is 37.5%`);
                break;
            case "blue":
                console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 50%, brown is 0%, and green is 50%`);
                break;
            case "green":
                console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 25%, brown is <1%, and green is 75%`);
                break;
        }
        break;
    case "blue":
        switch (parent2) {
            case "brown":
                console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 50%, brown is 50%, and green is 0%`);
                break;
            case "blue":
                console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 99%, brown is 0%, and green is 1%`);
                break;
            case "green":
                console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 50%, brown is 0%, and green is 50%`);
                break;
        }
        break;
}
