import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

function Login() {
    return <div className='Login'>

        <div className="login-box">
            <div className="heading">Login</div>
            <form >
                <label htmlFor="email">Email</label>
                <input type="email" className='email' id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" className='password' id="password" />
                <input type="submit" className='submit' />
            </form>
            <p>Don't have account ? <Link to='/signup'>Sign up</Link> </p>
        </div>

    </div>

}

export default Login