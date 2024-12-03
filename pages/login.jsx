import { useState } from 'react';
import LOGIN_IMAGE from '../src/assets/login_image.avif';
import '../src/styles/login.css';
const Login = () => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: ''
  });
  const handleInputChange = (event) => {
    setUserDetails({...userDetails, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem('users'));
    for(let i = 0; i < users.length; i++) {
      if(users[i].email === userDetails.email && users[i].password === userDetails.password) {
        window.location.href = '/dashboard';
        break;
      }
    } 
    alert('Invalid credentials');
    setUserDetails({email: '', password: ''});
    return;
    
  }
  return (
    <div className="login-page">
      <div className="login-component">
        <img src={LOGIN_IMAGE} alt="Login" className="login-image" />
        <form className="login-form" onSubmit={handleSubmit}>
            <h1>LOGIN</h1>
            <h3>Track your time smartly!</h3>
          <input onChange={handleInputChange} type="email" placeholder="Email" required />
          <input onChange={handleInputChange} type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <a href="/register">Create New Account</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
