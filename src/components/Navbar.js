import React from "react";
import {Link, useNavigate} from "react-router-dom";
import { isExpired, decodeToken  } from "react-jwt";
import axios from "axios";

const Navbar = ({setSearch}) => {
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
        <div>
            <div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <Link to="/" class="btn btn-lg btn-warning" id="pills-home-tab" data-toggle="pill" role="tab"
                                  aria-controls="pills-home" aria-selected="true">FilmHub</Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link to="/add" class="btn btn-lg btn-primary" id="pills-home-tab" data-toggle="pill" role="tab"
                                  aria-controls="pills-home" aria-selected="true">Add</Link>
                        </li>
                    </ul>
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li>
                            <div className="input-group input-group-lg">
                                <div className="input-group-prepend">
                                </div>
                                <input onChange={e=>searchInput(e.target.value)} type="text" className="form-control" aria-label="Large"
                                       aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                        </li>
                    </ul>
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        {isNotLogged && <li className="nav-item" role="presentation">
                            <Link to="/login" class="btn btn-success" id="pills-home-tab" data-toggle="pill" role="tab"
                                  aria-controls="pills-home" aria-selected="true">Login</Link>
                        </li>}
                        {isNotLogged && <li className="nav-item" role="presentation">
                            <Link to="/signUp" class="btn btn-primary" id="pills-home-tab" data-toggle="pill" role="tab"
                                  aria-controls="pills-home" aria-selected="true">SignUp</Link>
                        </li>}
                        {name && <h4 style={{float: 'left'}}>User: {name}</h4>}
                        {!isNotLogged && <li className="nav-item" role="presentation">
                            <button type="button" className="btn btn-danger" onClick={logout}>LogOut</button>
                        </li>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
