import MoviesContainer from "./MoviesContainer";
import {useEffect, useState} from "react";
import '../App.css'
import {Link} from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

export function Home({setSearch,search=""}) {

    const[data,setData]=useState([])
    const[movies,setMovies]=useState([])
    const[finishloading,setfinishloading]=useState(false)
    useEffect(()=>{
        axios.get("https://at.usermd.net/api/movies")
            .then((Response)=>{
                setData(Response.data)
                setMovies(Response.data)
                console.log(Response)
                setfinishloading(true)
            })
            .catch((Error)=>{
                console.log(Error)
            })
    },[])
    useEffect(()=>{
        if (finishloading){
            let searchedmovies=[];
            data.forEach((movie)=>{
                if (movie.title){
                    if(movie.title.toLowerCase().includes(search.toLowerCase())) searchedmovies.push(movie);
                }
            })
            setMovies(searchedmovies)
        }
    },[search])
    return(
        <div className="Home">

           <Navbar setSearch={setSearch} />

            <div className="App">
                <MoviesContainer movies={movies}/>
            </div>



            <Footer className="footer"/>
        </div>
    )
}
