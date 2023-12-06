
function handleDaysUntilWeekend(event) {
    let day = event.target.value;
    switch (day) {
        case "Monday":
            console.log("Only 4 more days until the weekend")
            break;
        case "Tuesday":
            console.logt("Only 3 more days until the weekend")
            break;
        case "Wednesday":
            console.logt("Only 2 more days until the weekend")
            break;
        case "Thursday":
            console.log("Only 1 more day until the weekend")
            break;
        case "Friday":
            console.log("It's the weekend tonight!")
            break;
        case "Saturday":
        case "Sunday":
            console.log("It's the weekend! Go have fun!")
            break;
        default:
            console.log("Sorry we didn't recognise that day.")
    }
}