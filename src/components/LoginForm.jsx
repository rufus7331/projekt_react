import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css"

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
        <div className='TextFieldContainer'>
            <img src={"https://t4.ftcdn.net/jpg/04/64/96/91/360_F_464969171_EhrkPWQOrARbuyIHL8Na6H6OzJkYZwwQ.jpg"} className="App-logo" alt="logo" />
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='email'>
                    <label htmlFor='email'>
                        Login
                    </label>

                    <input value={account.username}
                           name="username"
                           onChange={handleChange}
                           type="text"
                           className="form-control"
                           id="username"
                           aria-describedby="emailHelp"
                           placeholder="Username"/>  
                </div>
                <div className='password'>
                    <label htmlFor='email'>
                        Hasło
                    </label>
                    <input value={account.password}
                        name="password"
                        onChange={handleChange}
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password" />
                </div>
                {errors.password && <p className='text-danger'>Błędny login lub hasło</p>}
                <div className='submit'>
                    <button type='submit'>
                        Zaloguj
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
