const pets = ["pixie", "claude", "sebastian", "bug"];
// -> 1. ['claude', 'sebastian', 'bug', 'pixie']
// -> 2. ['pixie', 'bug', 'sebastian', 'claude']
// -> 3. ['bug', 'sebastian', 'pixie']
// -> 4. ['Bug', 'Sebastian', 'Pixie]
// -> 5. ['Bug', 'Seb', 'Pix']

let last = pets.shift()
pets.push(last)
console.log(pets)

pets.reverse()
console.log(pets)

pets.pop()
let newLast = pets.shift()
pets.push(newLast)
console.log(pets)

let newpets = []
for(let i=0; i<pets.length; ++i) {
    let pet = pets[i].charAt(0).toUpperCase() + pets[i].slice(1);
    newpets.push(pet)
    console.log(newpets)
}

let shortpets = []

newpets.forEach((pet) => shortpets.push(pet.substring(0,3)));
console.log(shortpets)
