import { constants } from "node:fs/promises";

  type Movie = 
  {

    id:string;
    title:string;
    director:string;
    release_Year:Date;
    genre:string;
    rating:number[];

  };
  
  export class MovieManagement
  {
      private movies:Map<string,Movie>;
    constructor()
    {
        this.movies=new Map<string,Movie>();
    }

  addMovie(id:string,title:string,director:string,release_Year:Date,genre:string) : string
    {
        const newMovie={id,title,director,release_Year,genre,rating:[]};
        this.movies.set(id,newMovie);
        return "Movie Added Succefully";
    }

   rateMovie(id:string,rating:number) : Boolean
   {
        const movies=this.movies.get(id);
        if(movies && (rating>=1 && rating<=5))
        {
            movies.rating.push(rating);
            return true;
        }
        return false;
   }

 getAverageRating(id:string) : number
 {

    const movie=this.movies.get(id);
    if(movie)
    {
        const sum=movie.rating.reduce((acc,curr)=> acc + curr,0);
        return sum/movie.rating.length;
    }
 return -1;



 }



  }