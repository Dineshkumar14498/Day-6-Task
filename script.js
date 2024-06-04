class Movie{
    constructor(title, studio, rating = "PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    static getPG(movies){
       return movies.filter(movie => movie.rating === "PG")
          
    }      
}
const movie1 = new Movie("Casino Royale", "Eon Productions","PG-13");
const moviesArray = [
    new Movie("leo", "7screen sudio ", "PG"),
    new Movie("Vikram", "Raj kamal sudio", "5"),
    new Movie("jailer", "sun Pictures", "PG"),
    new Movie("Jawan", "Red Chillies Entertainment", "PG"),
]  
const pgMovies = Movie.getPG(moviesArray,movie1)
pgMovies.forEach(movie => console.log(movie.title));