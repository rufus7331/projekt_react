import React, { useState,useEffect } from 'react';
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link, useNavigate} from 'react-router-dom';
import Axios from "axios"
import {useParams} from "react-router-dom"
import Navbar from "./Navbar";
import {decodeToken, isExpired} from "react-jwt";
import axios from "axios";
import Footer from "./Footer";

function Details(){
    const {movieid} = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        Axios.get("https://at.usermd.net/api/movies/"+movieid)
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    const isNotLogged = isExpired(localStorage.getItem('token'))
    const isAdmin = isNotLogged ? false : decodeToken(localStorage.getItem('token')).isAdmin;
    const deleteVideo = () => {
        axios.delete(`https://at.usermd.net/api/movie/${movieid}`)
            .then((response) => {
                navigate("/");
                console.log(response);
            })
            .catch((error) =>{
                console.log(error);
            })
    }
    const navigate = useNavigate();
    return (
        <div className="details" style={{height: 1000}}>
            <Navbar/>

            <div>
                <img src={data.image} className="rounded mx-auto d-block" alt=""/>
            </div>

            <div>
                <div className="info">
                    <h1 className="title">{data.title}</h1>
                    <p className=".text-warning">{data.content}</p>
                    {isAdmin ? <div><button class="btn btn-danger" onClick={deleteVideo}>DELETE</button></div> : null}
                </div>
            </div>

           <Footer/>


        </div>

    )
}
export default Details;
