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
                <label htmlFor='name'>Full Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Full Name' id='name' name='name'></input>

                <label htmlFor='user'>username</label>
                <input value={user} onChange={(e) => setUser(e.target.value)} type='text' placeholder='username' id='user' name='user'></input>

                <label htmlFor='password'>password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='*********' id='password' name='password'></input>

                <button type='submit'>Register</button>
            </form>
            <button onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}