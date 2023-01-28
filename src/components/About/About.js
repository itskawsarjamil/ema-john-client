import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';

const About = () => {
    const {user}=useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <h2>This is all about us
                {
                    user?.email && <span>{user.email}</span>
                }
            </h2>
        </div>
    );
};

export default About;