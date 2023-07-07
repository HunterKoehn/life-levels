import React, { useState } from 'react'

export const Register = (props) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }

    return (
        <div className='auth-form-container'>
        <form onSubmit={handleSubmit}>

                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='First and last name' id='name' name='name'></input>
                </div>
                
                <div className='form-group'>
                    <label htmlFor='user'>Username</label>
                    <input value={user} onChange={(e) => setUser(e.target.value)} type='text' placeholder='Desired username' id='user' name='user'></input>
                </div>
                
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='Desired password' id='password' name='password'></input>
                </div>
                
                <div className='form-group form-register-btn'>
                    <button className='register-btn' type='submit'>Register</button>
                </div>
                
            </form>
            <button onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}