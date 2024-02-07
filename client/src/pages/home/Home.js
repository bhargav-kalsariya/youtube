import React, { useEffect, useState } from 'react'
import { axiosClient } from '../../utility/axiosClient'

function Home() {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchVideos();
    }, []);

    async function fetchVideos() {
        try {
            const response = await axiosClient.get('/video/getAll');
            const UiVideoArray = response.result.allVideos;

            setVideos(UiVideoArray);

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <h1>hi</h1>
    )
}

export default Home