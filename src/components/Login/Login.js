import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './Login.css';
const Login = () => {

    const navigate = useNavigate();
    const { signIn } = useContext(AuthContext);

    const location = useLocation();
    console.log("login page location: ", location);
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log("login form data:", email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log("success", user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            })
    }




    return (
        <div className='form-container'>
            <h2 className='form-title'> Login Section</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" autocomplete="do-not-autofill" required />
                </div>
                <input type="submit" value="Login" className='btn-submit' />
            </form>
            <p>New to ema john <Link to='/signup'>Create a New Accout</Link> </p>
        </div>
    );
};

export default Login;