import { MovieManagement } from "./Movies";
const Movie=new MovieManagement();
console.log(Movie.addMovie("123","Kantara","Rishab",new Date("2021-04-04"),"Devotional"));
console.log(Movie.rateMovie("123",6));