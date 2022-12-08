import './App.css';
import {useEffect, useState} from "react";
import MovieCard from "./MovieCard";

function App() {
    const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=b0d96495bb7ff9a7b9ee1ba364f2b982"
    const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=b0d96495bb7ff9a7b9ee1ba364f2b982&query="

    const [movies, setMovies] = useState([]);
    const [term, setTerm] = useState([])


    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => setMovies(data.results))
    }, [])


    console.log(movies)

    const handleSearch = (e) => {
        e.preventDefault()

        fetch(API_SEARCH + term)
            .then(res => res.json())
            .then(data => setMovies(data.results))
    }
    return (
        <div className="App">

            <div className="action_bar">

                <div className="title">
                    <h1>FilmHub</h1>
                </div>
                <div className="input_group_container">
                    <div className="input-group">
                        <input type="search" className="form-control" placeholder="Szukaj" aria-label="Szukaj"
                               aria-describedby="search-addon" onChange={(e) => setTerm(e.target.value)}/>
                        <button type="button" className="btn btn-warning App-button-search"
                                onClick={handleSearch}>Szukaj
                        </button>
                    </div>
                </div>
                <div className="login">
                    <button class="btn btn-success">Login</button>
                </div>
            </div>


            <div className="movies">
                {movies.map((movie) =>
                    <MovieCard {...movie}/>
                )}
            </div>
<div className="App_footer">


            <div className="card w-75">
                <div className="card-body">
                    <h5 className="card-title">Wykonano</h5>
                    <p className="card-text">Copyrights © Hubert Pochroń | 2022</p>
                    <a href="https://github.com/rufus7331" className="btn btn-primary">Kontakt</a>
                </div>
            </div>
</div>
        </div>
    );
}

export default App;
