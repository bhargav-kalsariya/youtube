import React from 'react'
import './Navbar.scss'
import { CiMenuFries, CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate();

    return (
        <div className='Navbar'>
            <div className="logo" onClick={() => { navigate('/') }}>
                <CiMenuFries />
                <h2>YouTube</h2>
            </div>
            <div className="search-box">
                <input type="text" placeholder='Search' />
                <div className="search-icon">
                    <CiSearch />
                </div>
            </div>
            <div className="profile-icon" onClick={() => { navigate('/profile/3gd') }}>
                <CgProfile />
            </div>
        </div>
    )
}

export default Navbar