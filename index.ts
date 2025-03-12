const readlineSync = require("readline-sync");

import { MovieManagement } from "./Movies";

const Movie = new MovieManagement();

console.log(
  "Enter the following numbers: \n1: Add Movie \n2: Rate Movie \n3: Average Rating \n4: Top Rated Movies in order \n5: Search movie by genre \n6: Search movie by Director \n7: Search Movie by Keyword \n8: Delete Movie \n9: Exit"
);

while (true) {
  const option: string = readlineSync.question("Enter option: ");

  switch (option) {
    case "1":
      console.log("Enter Movie details");
      const idt = readlineSync.question("Enter ID: ");
      const ititle = readlineSync.question("Enter title: ");
      const idirector = readlineSync.question("Enter director name: ");
      const inputDate = readlineSync.question("Enter a date (YYYY-MM-DD): ");
      const date = new Date(inputDate);
      const genre = readlineSync.question("Enter genre: ");

      console.log(Movie.addMovie(idt, ititle, idirector, date, genre));
      break;

    case "2":
      const id = readlineSync.question("Enter Movie ID: ");
      const rating = parseFloat(readlineSync.question("Enter rating (1-5): "));
      console.log(Movie.rateMovie(id, rating));
      break;

    case "3":
      const id3 = readlineSync.question("Enter Movie ID: ");
      console.log("Average Rating:", Movie.getAverageRating(id3));
      break;

    case "4":
      console.log("Top Rated Movies:", Movie.getTopRatedMovies());
      break;

    case "5":
      const genre1 = readlineSync.question("Enter Movie genre: ");
      console.log("Movies with genre:", Movie.getMoviesByGenre(genre1));
      break;

    case "6":
      const director = readlineSync.question("Enter Director Name: ");
      console.log("Movies by Director:", Movie.getMoviesByDirector(director));
      break;

    case "7":
      const keyword = readlineSync.question("Enter Keyword: ");
      console.log(
        "Movies matching keyword:",
        Movie.searchMoviesBasedOnKeyword(keyword)
      );
      break;

    case "8":
      const id4 = readlineSync.question("Enter Movie ID to delete: ");
      console.log("Deleting Movie:", Movie.removeMovie(id4));
      break;

    case "9":
      console.log("Exiting program...");
      process.exit();

    default:
      console.log("Invalid option! Please enter a valid number.");
  }
}
