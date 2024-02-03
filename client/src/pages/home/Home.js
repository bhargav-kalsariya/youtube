import React, { useEffect } from 'react'
import { axiosClient } from '../../utility/axiosClient'

function Home() {

    useEffect(() => {
        fetchVideos();
    }, []);

    async function fetchVideos() {
        try {
            const response = await axiosClient.get('/video/');
            console.log("home page", response);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>home</div>
    )
}

export default Home