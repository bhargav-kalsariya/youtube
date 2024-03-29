import React, { useState } from 'react'
import './Signup.scss'
import { Link } from 'react-router-dom'
import { axiosClient } from '../../utility/axiosClient';

function Signup() {

    const [username, setuserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            const result = await axiosClient.post('/auth/signup', {
                username,
                email,
                password
            });

            console.log(result);

        } catch (error) {

            console.error(error);

        }

    };

    return <div className='Signup'>
        <div className="signup-box">

            <div className="heading">Signup</div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" className='name' id="name" onChange={(e) => setuserName(e.target.value)} />
                <label htmlFor="email">Email</label>
                <input type="email" className='email' id="email" onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" className='password' id="password" onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" className='submit' />
            </form>

            <p>Already have an account ? <Link to='/login'>Login</Link> </p>

        </div>
    </div>

}

export default Signup