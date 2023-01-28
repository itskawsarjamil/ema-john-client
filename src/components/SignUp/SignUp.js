import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './SignUp.css';
const SignUp = () => {

    const { createUser } = useContext(AuthContext);


    const [error, setError] = useState(null);
    const [success, SetSuccess] = useState(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        setError(null);
        SetSuccess(null);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        if (password.length < 6) {
            setError("password's length should be greater than 6");
            return;
        }
        if (password !== confirm) {
            setError("Password didn't match");
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                SetSuccess("SignUp Successful");
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div className='form-container'>
            <h2 className='form-title'> Sign Up Section</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="confirm" name="confirm" required />
                </div>
                <input type="submit" value="SignUp" className='btn-submit' />
            </form>
            <p>Already have an account <Link to='/login'>Log In</Link> </p>
            <p className='text-error'>{error ? error : success}</p>
        </div>
    );
};

export default SignUp;