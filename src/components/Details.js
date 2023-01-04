import React, { useState,useEffect } from 'react';
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import Axios from "axios"
import {useParams} from "react-router-dom"

function Details(){
    const {movieid} = useParams()
    //console.log(movieid)
    const [data, setData] = useState([])

    const API_IMG="https://image.tmdb.org/t/p/w500/"

    useEffect(() => {
        Axios.get("https://api.themoviedb.org/3/movie/"+ movieid+"?api_key=b0d96495bb7ff9a7b9ee1ba364f2b982&language=en-US")
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="details">

            <div>
                <img src={API_IMG + data.poster_path} className="rounded mx-auto d-block" alt=""/>
            </div>

            <div>
                <div className="info">
                    <h1 className="title">{data.title}</h1>
                    <p className=".text-warning">{"Score: " +data.vote_average}</p>
                    <h3>{data.overview}</h3>
                </div>

                <div className="info">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Popularity</th>
                            <th scope="col">Budget</th>
                            <th scope="col">Revenue</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">{data.popularity}</th>
                            <td>{data.budget+"$"}</td>
                            <td>{data.revenue+"$"}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <div className="card w-100">
                <div className="card-body">
                    <h5 className="card-title">Wykonano</h5>
                    <p className="card-text">Copyrights © Hubert Pochroń | 2022</p>
                    <a href="https://github.com/rufus7331" className="btn btn-primary">Kontakt</a>
                    <Link to='/'  className='btn btn-secondary'>Powrót na strone główną</Link>
                </div>
            </div>


        </div>

    )
}
export default Details;
