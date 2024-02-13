import React from 'react'
import './Navbar.scss'
import { CiMenuFries, CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

function Navbar() {
    return (
        <div className='Navbar'>
            <div className="logo">
                <CiMenuFries />
                <h2>YouTube</h2>
            </div>
            <div className="search-box">
                <input type="text" placeholder='Search' />
                <div className="search-icon">
                    <CiSearch />
                </div>
            </div>
            <div className="profile-icon">
                <CgProfile />
            </div>
        </div>
    )
}

export default Navbar