import React, { useEffect, useState } from "react";
import { axiosClient } from "../../utility/axiosClient";
import Video from "../../components/video/Video";

import './Home.scss';

function Home() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {

        fetchVideos();

    }, []);

    async function fetchVideos() {
        try {

            const response = await axiosClient.get("/video/getAll");
            const UiVideoArray = response.result.allVideos;

            setVideos(UiVideoArray);

        } catch (error) {

            console.error(error);

        }
    }

    return (
        <ul className="Video">
            {videos.map((video, index) => {
                return (
                    <li key={index}>
                        <Video video={video} />
                    </li>
                );
            })}
        </ul>
    );
}

export default Home;
