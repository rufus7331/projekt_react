import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpForm = () => {
    const [account, setAccount] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const errors = {};
        if (account.name.trim() === '') {
            errors.username = 'Username is required!';
        }
        if (account.email.trim() === '') {
            errors.password = 'Email is required!';
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

        console.log(account);

        axios.post('https://at.usermd.net/api/user/create', {
            name: account.name,
            email: account.email,
            password: account.password
        }).then((response) => {
            console.log(response)
            navigate("/login");
        }).catch((error) => {
            const errors = {};
            errors.password = 'Given name does\'t exists or password is wrong!';
            setErrors(errors || {});
            console.log(error);
        });
    };

    const handleChange = (event) => {
        setAccount({ ...account, [event.currentTarget.name]: event.currentTarget.value });
    };

    return (
        <div className='TextFieldContainer'>
            <img src={"https://t4.ftcdn.net/jpg/04/64/96/91/360_F_464969171_EhrkPWQOrARbuyIHL8Na6H6OzJkYZwwQ.jpg"} className="App-logo" alt="logo" />
            <h2>Zarejestruj się</h2>
            <form onSubmit={handleSubmit}>
                <div className='email'>
                    <label htmlFor='email'>
                        Login
                    </label>

                    <input value={account.name}
                        name="name"
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        id="username"
                        aria-describedby="emailHelp"
                        placeholder="Username" />

                </div>
                <div className='password'>
                    <label htmlFor='email'>
                        Email
                    </label>
                    <input value={account.email}
                        name="email"
                        onChange={handleChange}
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Email" />

                    {errors.email &&
                        <div className="alert alert-danger">{errors.email}</div>}
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
                    {errors.password &&
                        <div className="alert alert-danger">{errors.password}</div>}
                </div>
                <div className='submit'>
                    <button type='submit'>
                        Zaloguj
                    </button>
                </div>
            </form>
        </div>
        // <div>
        //     <h1>Sign Up</h1>
        //     <form onSubmit={handleSubmit}>
        //         <div className="form-group">
        //             <label htmlFor="username">Name</label>
        //             <input value={account.name}
        //                    name="name"
        //                    onChange={handleChange}
        //                    type="text"
        //                    className="form-control"
        //                    id="username"
        //                    aria-describedby="emailHelp"
        //                    placeholder="Username"/>
        //             {errors.name &&
        //                 <div className="alert alert-danger">{errors.name}</div>}
        //         </div>
        //         <div className="form-group">
        //             <label htmlFor="email">Email address</label>
        //             <input value={account.email}
        //                    name="email"
        //                    onChange={handleChange}
        //                    type="email"                              className="form-control"
        //                    id="email"
        //                    aria-describedby="emailHelp"
        //                    placeholder="Email"/>
        //             {errors.email &&
        //                 <div className="alert alert-danger">{errors.email}</div>}
        //         </div>
        //         <div className="form-group">
        //             <label htmlFor="password">Password</label>
        //             <input value={account.password}
        //                    name="password"
        //                    onChange={handleChange}
        //                    type="password"
        //                    className="form-control"
        //                    id="password"
        //                    placeholder="Password"/>
        //             {errors.password &&
        //                 <div className="alert alert-danger">{errors.password}</div>}
        //         </div>
        //         <button type="submit" className="btn btn-primary">SignUp</button>
        //     </form>

        // </div>
    );
}

export default SignUpForm;
