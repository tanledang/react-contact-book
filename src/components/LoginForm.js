import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../features/account/accountSlice';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const isLoggedIn = useSelector(state => state.account.isLoggedIn)

    const dispatch = useDispatch();

    const submitForm = async (event) => {
        dispatch(logIn())
        event.preventDefault();
    }
    
    return (
        <div>
        {isLoggedIn ? (
            <h2>You're logged in!</h2>
        ) : (
            <form id="add-contact" onSubmit={submitForm}>
            <h2>Please login to save your contacts:</h2>
            <label htmlFor="name">Username:</label><br/>
            <input onChange={(event) => setUsername(event.target.value)} type="text" id="name" name="name" placeholder="username"/><br/>
            <label htmlFor="password">Password:</label><br/>
            <input onChange={(event) => setPassword(event.target.value)} type="password" id="email" name="email" placeholder="password"/><br/><br/>
            <input type="submit" value="Submit"/>
        </form>
        )}
        </div>
    )
}

export default LoginForm;