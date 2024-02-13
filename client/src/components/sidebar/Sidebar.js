import React from 'react'
import './Sidebar.scss'
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { FaHome } from "react-icons/fa";

function Sidebar() {
    return (
        <div className='Sidebar'>
            <div className="home">
                <FaHome />
                <h4>Home</h4>
            </div>
            <div className="shorts">
                <SiYoutubeshorts />
                <h4>shorts</h4>
            </div>
            <div className="subscriptions">
                <MdSubscriptions />
                <h4>subscriptions</h4>
            </div>
            <div className="settings">
                <IoIosSettings />
                <h4>settings</h4>
            </div>
        </div>
    )
}

export default Sidebar