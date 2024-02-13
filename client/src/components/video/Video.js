import React, { useEffect, useState } from 'react'
import Sidebar from './../sidebar/Sidebar';
import './Video.scss';
import Videos from '../videos/Videos';
import { axiosClient } from '../../utility/axiosClient';

function Video() {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchVideos();
    }, [])

    async function fetchVideos() {

        const response = await axiosClient.get('video/getAll');

        if (!response) {
            return console.log('Failed to get all videos');
        }

        const mapVideos = response.result.allVideos;
        setVideos(mapVideos);

    }

    return (
        <div className='Main'>
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className='video-box'>
                <div className="video">
                    {videos.map((video, index) => {
                        return <Videos key={index} video={video} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Video