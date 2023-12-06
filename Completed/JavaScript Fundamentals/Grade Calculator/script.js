function handleCalculateGrade(event) {

    let grade = event.target.value;

    if (!grade) {
        return;
    }

    grade = grade.toUpperCase();

    let percentage;
    switch (grade) {
        case "A":
            percentage = "91-100%"
            break;
        case "B":
            percentage = "76-90%"
            break;
        case "C":
            percentage = "51-75%"
            break;
        case "D":
            percentage = "26-50%"
            break;
        case "E":
            percentage = "1-25%"
            break;
        case "F":
            percentage = "0%"
            break;
    }

    alert("The percentage was " + percentage);
}