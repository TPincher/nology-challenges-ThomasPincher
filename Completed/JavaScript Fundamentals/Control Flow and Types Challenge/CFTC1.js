let lastThree = []

function handlePosOrNeg(event) {
    
    let currentNumber = event.target.value

    if (currentNumber > 0) {
        message = "This value is positive"
    } else if (currentNumber == 0) {
        message = "This value is neither positive or negative"
    } else {
        message = "This value is negative"
    }

    lastThree.unshift(currentNumber)

    if (lastThree.length == 3) {
        bestOfThree = Math.max(...(lastThree));
        alert((message) + ". Your last three numbers are " + lastThree +". The biggest of these numbers is " + (bestOfThree));
        lastThree.pop();
    } else {
        alert(message);
    }
}

