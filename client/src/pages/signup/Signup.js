import React from 'react'
import './Signup.scss'
import { Link } from 'react-router-dom'

function Signup() {
    return <div className='Signup'>

        <div className="signup-box">
            <div className="heading">Signup</div>
            <form >
                <label htmlFor="name">Name</label>
                <input type="text" className='name' id="name" />
                <label htmlFor="email">Email</label>
                <input type="email" className='email' id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" className='password' id="password" />
                <input type="submit" className='submit' />
            </form>
            <p>Already have an account ? <Link to='/login'>Login</Link> </p>
        </div>

    </div>

}

export default Signup