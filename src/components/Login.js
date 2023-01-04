import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        // Validate form values and submit login request
    };

    return (
        <form onSubmit={handleSubmit} className="bg-primary text-white p-5">
            <div className="form-group">
                <label htmlFor="login">Login</label>
                <input
                    type="text"
                    className="form-control"
                    id="login"
                    value={login}
                    onChange={event => setLogin(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
            </div>
            <p><button type="submit" className="btn btn-light">
                Log in
            </button></p>

            <Link to='/signup'  className='btn btn-light'>Nie masz jeszcze konta? Koniecznie je załóż już teraz!</Link>
            <Link to='/'  className='btn btn-secondary'>Powrót na strone główną</Link>
        </form>
    );
}

export default Login;
