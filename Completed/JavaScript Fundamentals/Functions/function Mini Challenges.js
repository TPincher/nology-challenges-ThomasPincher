const getDescription = (amountOfChilden, partnerName, location, jobTitle) => {
    console.log("I am currently a " + jobTitle + " living in " + location +
      ", and married to " + partnerName + " with " + amountOfChilden + " kids");
}

//getDescription("0","Steph","Adelaide","SWE")
//getDescription("3","Tom","Melbourne","artist")
//getDescription("5","nobody","Perth","student")


const calculateSupply = (currentAge, numberPerDay) => {
    const maxAge = 85;
    let yearsLeft = maxAge - currentAge;
    console.log(`You will need ${(yearsLeft*365)*numberPerDay} to last you until the ripe old age of ${maxAge}`)
}

// calculateSupply(33,3)
// calculateSupply(35,1)
// calculateSupply(15,2)


const tempConverter = (degrees, scale) => {
    if (scale == "F") {
        console.log(`That temperature in C is ${(degrees - 32) * (5/9)} degrees`) ;
    } else if (scale == "C") {
        console.log(`That temperature in F is ${(degrees - 32) * (9/5)} degrees`);
    } else {
        console.log ("Invalid input");
    }
}

// tempConverter(24,"C")
// tempConverter(110,"F")
// tempConverter(42,"C")
// tempConverter(24,"Z")


const dogYears = (humanYears) => {
    console.log(`Your dog is ${humanYears * 7} years old in dog years!`)
}

dogYears(3)
dogYears(5)
dogYears(8)