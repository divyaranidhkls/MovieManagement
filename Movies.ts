  type Movie = 
  {

    id:string;
    title:string;
    director:string;
    release_Year:Date;
    genre:string;
    rating?:number;

  };
  
  export class MovieManagement
  {
      private movies:Map<string,Movie>;
    constructor()
    {
        this.movies=new Map<string,Movie>();
    }

  addMovie(id:string,title:string,director:string,release_Year:Date,genre:string) : void
    {
        const newMovie={id,title,director,release_Year,genre};
        this.movies.set(id,newMovie);
    }






  }