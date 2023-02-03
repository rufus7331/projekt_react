import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";
import axios from "axios";

const Navbar = ({ setSearch }) => {
    const isNotLogged = isExpired(localStorage.getItem('token'));
    const name = isNotLogged ? "" : decodeToken(localStorage.getItem('token')).name;
    const userId = isNotLogged ? "" : decodeToken(localStorage.getItem('token')).userId;


    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        axios.delete(`https://at.usermd.net/api/user/logout/${userId}`, {
            userId: userId
        })
            .then((response) => {
                navigate("/");
                window.location.reload();
            })
            .catch((error) => {
                console.log("Błąd");
            });
    }

    const searchInput = (value) => {
        setSearch(value);
        navigate("/");
    }

    return (
        <div className="navbar">

            <h2>
                <Link to="/" class="btn btn-lg btn-outline-warning" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">
                    FilmHub</Link>
            </h2>

            <Link to="/add" class="btn btn-lg btn-success" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">
                Dodaj film
            </Link>

            <div className="searchInput">
                <input onChange={e => searchInput(e.target.value)} type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            </div>

            <div className="loginActionButtons">
                {isNotLogged &&
                    <Link to="/login" class="btn btn-warning" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">
                        Zaloguj się
                    </Link>
                }
                {isNotLogged &&
                    <Link to="/signUp" class="btn btn-warning" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">
                        Zarejestruj się
                    </Link>
                }
                <div className="loggedUserButtons">
                {name && <h4>{name}</h4>}
                {!isNotLogged &&
                    <button type="button" className="btn btn-danger" onClick={logout}>LogOut</button>
                }
                </div>

            </div>
        </div>
    );
};

export default Navbar;
