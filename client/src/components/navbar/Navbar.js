import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { CiMenuFries, CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import { axiosClient } from '../../utility/axiosClient';

function Navbar() {

    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        fetchMyVideos();
    }, []);

    async function fetchMyVideos() {

        const response = await axiosClient.get('/user/profile');
        const mapVideos = response.result?.currentVerifiedUserProfile;

        setUserInfo(mapVideos);

    }

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
            <div className="profile-icon" onClick={() => {
                navigate(`/profile/${userInfo._id}`, {
                    state: {
                        currentUserData: userInfo
                    }
                })
            }}>
                <CgProfile />
            </div>
        </div>
    )
}

export default Navbar