import React, { useState } from 'react'
import './Videos.scss';
import { axiosClient } from '../../utility/axiosClient';
import { useNavigate } from 'react-router-dom';

function Videos(video) {

    const navigate = useNavigate();
    const userIdForData = video.video.owner._id;

    const [userData, setUserData] = useState(null);
    console.log(userData);

    async function handleProfileClick() {

        const response = await axiosClient.post(`/user/profileOthers/${userIdForData}`);

        const userDataObj = response.result.verifiedUserData;

        if (userDataObj._id) {
            navigate(`/profile/${userDataObj._id}`, {
                state: {
                    userData: userDataObj
                }
            })
        }
        setUserData(userDataObj);
    }

    return (
        <div className='Videos'>
            <div className="video-main-box">
                <div className="video-up-box">
                    {video.video.owner.email}
                </div>
                <div className="video-bottom-box">
                    <div className="channel-icon" onClick={handleProfileClick}>
                        <img src='' alt={video.video.owner.subscribers?.length} />
                    </div>
                    <div className="video-details">
                        {video.video.title} <br />
                        likes {video.video.likes?.length}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Videos