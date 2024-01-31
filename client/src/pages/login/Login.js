import React, { useState } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import { axiosClient } from '../../utility/axiosClient';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {

        e.preventDefault();

        const result = await axiosClient.post('/auth/login', {
            email,
            password,
        })

        console.log(result);

    }

    return <div className='Login'>

        <div className="login-box">

            <div className="heading">Login</div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="text" className='email' id="email" onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" className='password' id="password" onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" className='submit' />
            </form>

            <p>Don't have account ? <Link to='/signup'>Sign up</Link> </p>

        </div>

    </div>

}

export default Login