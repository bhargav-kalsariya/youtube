import React, { useRef, useState } from 'react'
import './Profile.scss'
import { axiosClient } from './../../utility/axiosClient';
import img from './../../images/1692860352616.jpg'

function Profile() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const titleRef = useRef(null);
    const descRef = useRef(null);

    async function handleSubmit(e) {
        e.preventDefault();

        setTitle(titleRef.current);
        setDescription(descRef.current);

        const response = await axiosClient.post('/video/create', {
            title,
            description
        });

        return console.log(response);

    }

    return (
        <div className='Profile'>
            <div className="profile-wrapper">
                <div className="left-part">
                    <div className="create-video">
                        <div className="video-part">
                            video comes here
                        </div>
                        <div className="video-data-part">
                            <label htmlFor="title"></label>
                            <input type="text" id="title" ref={titleRef} />
                            <label htmlFor="description"></label>
                            <input type="text" id="description" ref={descRef} />
                            <button onClick={handleSubmit}>Create video</button>
                        </div>
                    </div>
                    <h3>My videos</h3>
                    <div className="your-videos">

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