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
    "126",
    "Kashmir Files",
    "Dont know",
    new Date("2020-04-04"),
    "Action"
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
console.log("Average Ratings", Movie.getAverageRating("123"));
console.log("Top Rated Movies", Movie.getTopRatedMovies());
console.log(
  "Searching Movie with the genre Devotional",
  Movie.getMoviesByGenre("Devotional")
);
console.log(
  "Searching Movie directeed by Rishab",
  Movie.getMoviesByDirector("Rishab")
);
console.log(
  "Searching Movies staring with ka",
  Movie.searchMoviesBasedOnKeyword("ka")
);
