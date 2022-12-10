import MovieCard from "../MovieCard";


const MoviesContainer = props => {

    return(

        <div
            className="movies"
            >
            {props.movies.map((movie) =>
                <MovieCard {...movie}/>
            )}
        </div>
    )

}
export default MoviesContainer;
