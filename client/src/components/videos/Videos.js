import React from 'react'

function Videos(video) {

    console.log(video);

    return (
        <div className='Videos'>
            <div className="video-main-box">
                <div className="video-box">
                    {video.video.id}
                </div>
                <div className="video-details-box">
                    {video.video.title}
                    {video.video.description}
                    {video.video.likes?.length}
                </div>
            </div>
        </div>
    )
}

export default Videos