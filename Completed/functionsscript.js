function moonOrbits(days) {
    return (days/27.3)
}

console.log(moonOrbits(52).toFixed(3))




function circleArea(radius) {
    return (Math.PI * (radius ** 2))
}

function circlePerimeter(radius) {
    return (2 * Math.PI * radius)
}

console.log(circleArea(2).toFixed(3))
console.log(circlePerimeter(3).toFixed(3))




function yearsToDays (years) {
    return (years * 365.25)
}

function yearsToSeconds (years) {
    return (years * 365.25 * 24 * 60 * 60)
}

console.log(yearsToDays(30).toFixed(2))
console.log(yearsToSeconds(30).toFixed(0))




function remainder(number1, number2) {
    return (number1 % number2)
}

console.log(remainder(3, 6));




function basketballPoints(twoPoints, threePoints) {
    return (twoPoints * 2 + threePoints * 3)
}

console.log(basketballPoints(22, 12))




function lessThan100(num1, num2) {
    if (num1 + num2 < 100) {
        return true
    } else return false
}

console.log(lessThan100(43, 56))