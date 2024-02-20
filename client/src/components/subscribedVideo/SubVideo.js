import React, { useEffect, useState } from 'react'
import Sidebar from './../sidebar/Sidebar';
import Videos from '../videos/Videos';
import { axiosClient } from '../../utility/axiosClient';

function SubVideo() {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchVideo();
    }, [])

    async function fetchVideo() {

        const response = await axiosClient.get('/user/subscribedVideos');

        if (!response) {
            return console.log('Failed to get all videos');
        }

        const mapVideos = response.result?.videos;
        setVideos(mapVideos);

    }

    return (
        <div className='Main'>
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className='video-box'>
                {
                    videos &&
                    <div className="video">
                        {videos?.map((video, index) => {
                            return <Videos key={index} video={video} />
                        })}
                    </div>
                }
            </div>
        </div>
    )
}

export default SubVideo