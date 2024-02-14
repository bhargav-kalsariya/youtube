import React, { useRef, useState } from 'react'
import './Profile.scss'
import { axiosClient } from './../../utility/axiosClient';
import img from './../../images/1692860352616.jpg'

function Profile() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await axiosClient.post('/video/create', {
            title,
            description
        });

    }

    return (
        <div className='Profile'>
            <div className="profile-wrapper">
                <div className="left-part">
                    <span>Create videos :-</span>
                    <div className="create-video">
                        <div className="video-part">
                            <img src={img} alt="" />
                        </div>
                        <div className="video-data">
                            <label htmlFor="title">Title :-</label>
                            <input
                                type="text"
                                id="title"
                                onChange={(e) => {
                                    setTitle(e.target.value)
                                }}
                                placeholder='add title here'
                            />
                            <label htmlFor="description">Description :-</label>
                            <textarea
                                id="description"
                                onChange={(e) => {
                                    setDescription(e.target.value)
                                }}
                                placeholder='add description here'
                            />
                            <button onClick={handleSubmit}>Create video</button>
                        </div>
                    </div>
                    <div className="created-video-by-you">
                        <span>My videos :-</span>
                        <div className="your-videos">

                        </div>
                    </div>
                </div>
                <div className="right-part">
                    <div className="profile-box">
                        <div className="profile-img">
                            <img src={img} alt="profile" />
                            <h2> Creator</h2>
                        </div>
                        <div className="profile-info">
                            <h4>subscribers <br /> 455</h4>
                            <h4>subscription <br />300</h4>
                        </div>
                        <div className="profile-actions">
                            <button>Subscribe</button>
                            <button>Update profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile