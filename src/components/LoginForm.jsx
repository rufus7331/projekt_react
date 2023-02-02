import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
    const [account, setAccount] = useState({
        username: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const validate = () => {
        const errors = {};

        if (account.username.trim() === '') {
            errors.username = 'Username is required!';
        }
        if (account.password.trim() === '') {
            errors.password = 'Password is required!';
        }

        return Object.keys(errors).length === 0 ? null : errors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const errors = validate();
        setErrors(errors || {});
        if (errors) return;

        axios.post("https://at.usermd.net/api/user/auth",
            {
                login: account.username,
                password: account.password
            })
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                console.log(response)
                navigate('/');
                //window.location.reload();
            }).catch((error) => {
            const errors = {};
            errors.password = 'Given name does\'t exists or password is wrong!';
            setErrors(errors || {});
            console.log(error);
        });
    };

    const handleChange = (event) => {
        setAccount({
            ...account,
            [event.currentTarget.name]: event.currentTarget.value
        });
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Email address</label>
                    <input value={account.username}
                           name="username"
                           onChange={handleChange}
                           type="text"
                           className="form-control"
                           id="username"
                           aria-describedby="emailHelp"
                           placeholder="Username"/>
                    {errors.username &&
                        <div className="alert alert-danger">{errors.username}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input value={account.password}
                           name="password"
                           onChange={handleChange}
                           type="password"
                           className="form-control"
                           id="password"
                           placeholder="Password"/>
                    {errors.password &&
                        <div className="alert alert-danger">{errors.password}</div>}
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>

        </div>
    );
};

export default LoginForm;
