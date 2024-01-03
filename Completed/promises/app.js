// const getRandomUser = () => {
//      fetch("https://randomuser.me/api/")
//      .then(results => results.json())
//      .then(json => console.log(json.results[0].name.first))
//      .catch(error => console.log(error))
// }

// getRandomUser()



const makeBeerCard = beer => {
    return `
    <div class="beer-container">
        <h1>${beer.name}</h1>
        <h4>${beer.tagline}</h4>
        <p>${beer.description}</p>
        <h3>${beer.abv}%</p>
        <p>Served best with: ${beer.food_pairing[0]}</p>
    </div>`
}

const getRandomBeer = () => {
    fetch('https://api.punkapi.com/v2/beers/random')
        .then(results => results.json())
        .then(json => document.body.innerHTML += makeBeerCard(json[0]))
}

getRandomBeer()