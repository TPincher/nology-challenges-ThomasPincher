class Movie {
    constructor(name, director, release, imdbRating, runtime) {
        this.name = name;
        this.director = director;
        this.release = release;
        this.imdbRating = imdbRating;
        this.runtime = runtime;
    }
}

const movies = [
    new Movie("Kill Bill", "Tarantino", 2003, 8.2, "1h51m"),
    new Movie("The incredibles", "Brad Bird", 2004, 8, "1h30m"),
    new Movie("The Princess Bride", "Rob Reiner", 1987, 8, "1h38m"),
];

// Get all movies that were released after 2000
console.log(movies.filter((movie) => movie.release >= 2000));

// Get all movies director begins with T
console.log(movies.filter((movie) => movie.director[0] == 'T'));

// Get the first movie in the list where the name contains "the"
console.log(movies.find((movie) => movie.name.includes("The")));

// Get the total run time of all movies in seconds
let runtimes = movies.map((movie) => movie.runtime);
splitArray = runtimes.map((time) => time.split("h"));
let hours = splitArray.map((splits) =>Number(splits[0]))
let summedHours = hours.reduce((acc, hourCount) => acc + hourCount)
let minutes = splitArray.map((splits) => Number((splits[1]).slice(0,2)))
let summedMinutes = minutes.reduce((acc, minuteCount) => acc + minuteCount)

runtimeSeconds = (summedHours * 60 * 60) + (summedMinutes * 60)

console.log(runtimeSeconds)



// get the average imdb rating of all movies in the set
let totalScore = 0 
movies.map((movie) => {
    totalScore += movie.imdbRating;
})
console.log(totalScore/movies.length)

// Get the newest movie
console.log (
    movies.reduce((acc, movie) => {
        if (movie.release < acc.release) {
            acc = movie;
        }
        return acc;
    })
)

// Get movies that have a greater run time that 90mins
let moviesOver90 = (
    movies.filter((movie) => {
    let sliced = movie.runtime.slice(0, -1)
    let minutes = sliced.split("h")[1];
    minutes = Number(minutes)
    minutes += (sliced.split("h")[0] * 60)
    return minutes >= 90
})
)

console.log(moviesOver90)