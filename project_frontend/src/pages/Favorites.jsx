import "../css/Favorites.css"
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/Moviecard";
function Favorites(){
    const {favorites} = useMovieContext();
    if (favorites){
        return(<div className="favorites">
            <h2>YOUR FAVORITES</h2>
            <div className="movies-grid">
        {favorites.map((movie) => (
         <MovieCard movie={movie} key={movie.id} />
        ))}
      </div></div>)
    }
    return(<div className="favorites-empty">
        <h2>Favorite movie yet</h2>
        <p>start adding</p>
    </div>)
}
export default Favorites;