import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import logo from '../../images/Logo.svg'
import './Header.css';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="" />
                <div>
                    <Link to="/">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>
                    {
                        user?.uid ? <button style={{ backgroundColor: "transparent", border: 'none', color: 'white', marginLeft: '1em', fontSize: '1.2em' }} onClick={logOut}>LogOut</button>
                            : <>
                                <Link to='/signup'>SignUp</Link>
                                <Link to='/login'>Login</Link>
                            </>
                    }
                    <span style={{ color: "white", marginLeft: '5em', fontSize: '1.2em' }}>{user?.email}</span>

                </div>
            </nav >
        </div >
    );
};

export default Header;