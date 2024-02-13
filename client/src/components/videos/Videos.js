import React from 'react'
import './Videos.scss';
import img from '../../images/1692860352616.jpg'

function Videos(video) {

    console.log(video);

    return (
        <div className='Videos'>
            <div className="video-main-box">
                <div className="video-up-box">
                    {video.video.id}
                </div>
                <div className="video-bottom-box">
                    <div className="channel-icon">
                        <img src={img} alt="icon" />
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