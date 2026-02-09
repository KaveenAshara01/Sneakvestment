import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(username, password);
            navigate('/admin/dashboard');
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <form className="w-full max-w-sm bg-white p-8 border border-secondary shadow-[8px_8px_0px_#3b82f6]" onSubmit={handleSubmit}>
                <h2 className="text-3xl font-heading text-center mb-6 text-primary">Admin Access</h2>

                {error && <div className="bg-red-500/20 text-red-500 p-2 text-center text-sm mb-4 border border-red-500 font-mono">{error}</div>}

                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full bg-slate-50 border border-secondary p-3 text-gray-900 focus:outline-none focus:border-primary focus:shadow-[2px_2px_0px_#3b82f6] transition-all rounded-none font-mono"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-slate-50 border border-secondary p-3 text-gray-900 focus:outline-none focus:border-primary focus:shadow-[2px_2px_0px_#3b82f6] transition-all rounded-none font-mono"
                    />
                    <button type="submit" className="w-full btn btn-primary py-3">Login</button>
                </div>
            </form>
        </div>
    );
};

export default AdminLogin;
