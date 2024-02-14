import React from 'react'
import './Profile.scss'
import img from './../../images/1692860352616.jpg'

function Profile() {
    return (
        <div className='Profile'>
            <div className="profile-wrapper">
                <div className="left-part">
                    left
                </div>
                <div className="right-part">
                    <div className="profile-box">
                        <div className="profile-img">
                            <img src={img} alt="profile" />
                            <h2> Creator</h2>
                        </div>
                        <div className="profile-info">
                            <h4>subscribers <br /> 455</h4>
                            <h4>subscription <br />300</h4>
                        </div>
                        <div className="profile-actions">
                            <button>Subscribe</button>
                            <button>Update profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile