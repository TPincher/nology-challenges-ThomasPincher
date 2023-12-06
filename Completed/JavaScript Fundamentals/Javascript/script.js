function calculateYearsUntilRetirement(event) {
    const currentAge = event.target.value;

    let yearsLeft = 65 - currentAge;

    alert(`You have ${yearsLeft} years left until you retire`)
}


function getGreetingInFrench(event) {
    const word = event.target.value;

    if (word == "Hello") {
        frenchResponse = "Bonjour"
    } else if (word == "Goodbye") {
        frenchResponse = "Au Revoir"
    } else {
        frenchResponse = "Word Not Recognized"
    }

    alert(frenchResponse);
}