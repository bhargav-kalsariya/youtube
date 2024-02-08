import React from 'react'
import './Video.scss'

function Video(video) {

    return (

        <div className='Video-page'>
            <div className="video-wrapper">
                <div className='video'>
                </div>
                <div className="video-info">
                    <h1 className="title">{video.video.title}</h1>
                    <p className="description">{video.video.username}</p>
                    <div className="video-stats">
                        <span className="likes">{video.video.likes.length}</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Video