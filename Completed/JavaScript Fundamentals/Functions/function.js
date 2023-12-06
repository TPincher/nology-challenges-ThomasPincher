const calculatePerimiter = (width, height) => {
    perimiter = (width*2 + height*2)
    return perimiter;
}

//console.log(calculatePerimiter(2,3));


const calculateArea = (radius) => {
    const area = Math.PI * radius * radius
    return area
}

//console.log(calculateArea(2))


const calculateCircumference = (radius) => {
    const circumference = (Math.PI * 2) * radius
    return circumference
}

//console.log(calculateCircumference(3));