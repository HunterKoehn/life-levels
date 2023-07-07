import React, { useState } from 'react'

export const Login = (props) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }

    return (
        <div className='auth-form-container'>

            <div>
                <h1>Welcome to<br></br>Life Levels!</h1>
            </div>
            
            <form onSubmit={handleSubmit}>

                <div className='form-group'>
                    <label htmlFor='user'>Username</label>
                    <input value={user} onChange={(e) => setUser(e.target.value)} type='text' placeholder='Enter Username' id='user' name='user'></input>
                </div>
                
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='Enter Password' id='password' name='password'></input>
                </div>
                
                <div className='form-group form-login-btn'>
                    <button className='login-btn' type='submit'>Login</button>
                </div>
                
            </form>
            <button className='register-now-btn' onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>

        </div>
    )
}