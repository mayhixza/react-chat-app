import { useState } from 'react';
import axios from 'axios';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "588dd1b8-c70f-4567-a9f4-8652451cbac6", 'User-Name': username, 'User-Secret': password}

        try {
            await axios.get('https://api.chatengine.io/chats', { headers : authObject})

            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
            window.location.reload();

        } catch (err) {
            setError('Incorrect credentials!')
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Login in</h1>
                <form onSubmit={handleSubmit}>
                    <h2 className="login-error">{error}</h2>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">Let's go!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;