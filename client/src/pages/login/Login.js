import React, { useState } from 'react';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { axiosClient } from '../../utility/axiosClient';
import { KEY_ACCESS_TOKEN, setItem } from '../../utility/localStorageManager';

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            const data = await axiosClient.post('/auth/login', {
                email,
                password,
            });

            setItem(KEY_ACCESS_TOKEN, data.accessToken);
            navigate('/');

        } catch (error) {

            console.error(error);

        }

    }

    return <div className='Login'>

        <div className="login-box">

            <div className="heading">Login</div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" className='email' id="email" onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" className='password' id="password" onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" className='submit' />
            </form>

            <p>Don't have account ? <Link to='/signup'>Sign up</Link> </p>

        </div>

    </div>

}

export default Login