let hobbies = ["Snowboarding", "Gridiron", "Cooking"]
console.log(hobbies[0]);

let firstHobby = hobbies.shift();
console.log(firstHobby);

let arrayLength = hobbies.length;
console.log(arrayLength);

hobbies.push("coding")
console.log(hobbies[hobbies.length-1])



console.log(`My hobbies are ${hobbies.join(", ")}`)




let groceryArray = ["avocado", "jalapeno", "lemon juice", "coriander", "tomato"]

console.log(groceryArray.join("|"))