import { useState } from 'react';
import axios from 'axios';

import useRequest from '../../hooks/useRequest';

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const onSubmit = async (evt) => {
        evt.preventDefault();

        console.log(email, password);
        try {
            const response = await axios.post('/api/users/signup', {
                email,
                password
            });
        } catch (err) {
            setErrors(err.response.data.errors);
        }
    };
    return (
        <form onSubmit={onSubmit}>
            <h1>Sign Up</h1>
            <div className="form-group">
                <label>Email address</label>
                <input
                    value={email}
                    onChange={(evt) => setEmail(evt.target.value)}
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                    value={password}
                    onChange={(evt) => setPassword(evt.target.value)}
                    type="password"
                    className="form-control"
                />
            </div>
            {}
            <button className="btn btn-primary">Sign Up</button>
        </form>
    );
};
