import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Add() {
    const [details, setDetails] = useState({
        title: "",
        image: "",
        content: ""
    });
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        if(details.title === "" || details.image === "" || details.content === "") { setErrors("Błąd"); return }
        axios.post("https://at.usermd.net/api/movies", {
            title: details.title,
            image: details.image,
            content: details.content,
        })
            .then((response) => {
                navigate("/");
                console.log(response);
            })
            .catch((error) => {
                setErrors("Błąd");
                console.log(error);
            });
    }

    const handleChange = (event) => {
        setDetails({ ...details, [event.currentTarget.name]: event.currentTarget.value });
    };

    return(
        <div>
            <h1>Dodaj film do bazy</h1>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Tytuł</label>
                    <input value={details.title}
                           name="title"
                           onChange={handleChange}
                           type="text"
                           className="form-control"
                           id="title"
                           aria-describedby="emailHelp"
                           placeholder="Tytuł"/>
                </div>
                <div className="form-group">
                    <label htmlFor="image">Obraz</label>
                    <input value={details.image}
                           name="image"
                           onChange={handleChange}
                           type="url"                              className="form-control"
                           id="image"
                           aria-describedby="emailHelp"
                           placeholder="image"/>
                </div>
                <div className="form-group">
                    <label htmlFor="content">Opis</label>
                    <input value={details.content}
                           name="content"
                           onChange={handleChange}
                           type="text"
                           className="form-control"
                           id="content"
                           placeholder="content"/>
                </div>
                <button type="submit" className="btn btn-primary">Dodaj film</button>
            </form>

        </div>
    );
}

export default Add;
