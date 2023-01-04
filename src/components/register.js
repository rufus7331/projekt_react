import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        // Validate form values and submit registration request
    };

    return (
        <form onSubmit={handleSubmit} className="bg-primary text-white p-5">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
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
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm password</label>
                <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={event => setConfirmPassword(event.target.value)}
                />
            </div>
           <p> <button type="submit" className="btn btn-light">
               Sign up
           </button></p>
            <Link to='/signin'  className='btn btn-light'>Masz już konto? Zaloguj się już teraz!</Link>
            <Link to='/'  className='btn btn-secondary'>Powrót na strone główną</Link>
        </form>
    );
}

export default Register;
