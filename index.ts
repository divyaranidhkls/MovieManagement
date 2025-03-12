import { MovieManagement } from "./Movies";
const Movie = new MovieManagement();
console.log(
  Movie.addMovie(
    "123",
    "Kantara",
    "Rishab",
    new Date("2021-04-04"),
    "Devotional"
  )
);
console.log(
  Movie.addMovie(
    "125",
    "Super",
    "Upendra",
    new Date("2019-04-04"),
    "Intelligent"
  )
);
console.log(Movie.rateMovie("123", 4));
console.log(Movie.rateMovie("123", 4));
console.log(Movie.rateMovie("123", 5));
console.log(Movie.rateMovie("123", 3));
console.log(Movie.getAverageRating("123"));
console.log(Movie.getTopRatedMovies());
console.log(Movie.getMoviesByGenre("Devotional"));
console.log(Movie.getMoviesByDirector("Rishab"));
