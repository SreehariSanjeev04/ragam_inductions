import { useEffect, useState } from 'react';
import register_IMAGE from '../src/assets/login_image.avif';
import '../src/styles/register.css';

const Register = () => {
    const [userDetails, setUserDetails] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleRegister = (e) => {
        e.preventDefault();
        if (userDetails.password === userDetails.confirmPassword) {
            let users = JSON.parse(localStorage.getItem('users')) || []; 
            users.push({ email: userDetails.email, password: userDetails.password });
            localStorage.setItem('users', JSON.stringify(users)); e
            alert('Registration Successful!');
        } else {
            alert('Passwords do not match, try again!');
        }
    };

    const handleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const LoggedIn = localStorage.getItem('loggedIn');
        if(LoggedIn === "true") {
            window.location.href = '/dashboard';
            return;
        }
    },[])
    return (
        <div className="register-page">
            <div className="register-component">
                <form className="register-form" onSubmit={handleRegister}>
                    <h1>Register</h1>
                    <h3>First step to smarter time tracking!</h3>
                    <input 
                        onChange={handleChange} 
                        type="email" 
                        name="email" 
                        placeholder="email" 
                        value={userDetails.email}
                        required 
                    />
                    <input 
                        onChange={handleChange} 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={userDetails.password}
                        required 
                    />
                    <input 
                        onChange={handleChange} 
                        type="password" 
                        name="confirmPassword" 
                        placeholder="Confirm Password" 
                        value={userDetails.confirmPassword}
                        required 
                    />
                    <button type="submit">Register</button>
                    <a href="/">Already have an account? Login</a>
                </form>
                <img src={register_IMAGE} alt="register" className="register-image" />
            </div>
        </div>
    );
};

export default Register;
