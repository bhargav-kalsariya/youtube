import React from 'react'
import './Videos.scss';

function Videos(video) {

    return (
        <div className='Videos'>
            <div className="video-main-box">
                <div className="video-up-box">
                    {video.video.owner.email}
                </div>
                <div className="video-bottom-box">
                    <div className="channel-icon">
                        <img src='' alt={video.video.owner.subscribers.length} />
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