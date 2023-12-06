function handleVegSelection(event) {

let veg = document.getElementById("vegetables").value;
switch (veg) {
    case 'potatoes':
    case 'carrots':
        console.log(veg + " are $1.01 a kg");
        break;
    case 'brocolli':
        console.log(veg + " is $1.14 a kg");
        break;
    case 'cabbage':
        console.log(veg + " is $1.42 a kg");
        break;
    case 'asparagus':
        console.log(veg + " is $3.99 a kg");
        break;
    }
}
