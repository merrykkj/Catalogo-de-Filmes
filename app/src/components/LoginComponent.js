'use client';

import { useState } from "react";
import axios from "axios"; 

const API_URL = 'http://localhost:3001';

export default function LoginComponent({ onLoginSuccess, onLogout, isLoggedIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authMessage, setAuthMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false); 

    const handleLogin = async (e) => {
        e.preventDefault();
        setAuthMessage('');

        if (isLoading) return; 

        setIsLoading(true); 

        try {
            const response = await axios.post(`${API_URL}/api/auth/login`, { 
                email, 
                password 
            });
            
            onLoginSuccess(response.data); 
            
            setEmail('');
            setPassword('');
            setAuthMessage('');
            
        } catch (err) {
            console.error("Erro ao fazer login:", err);
            
            const msg = err.response?.data?.message || "Falha no login. Verifique suas credenciais e a conexão com o servidor.";
            setAuthMessage(msg);
        } finally {
            setIsLoading(false); 
        }
    };
    
    if (isLoggedIn) {
        return (
            <div className="p-4 border border-blue-500 rounded-lg bg-blue-50 shadow-md flex items-center justify-between">
                <p className="font-semibold text-blue-700">Você está logado!</p>
                <button 
                    onClick={onLogout}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                    Sair (Logout)
                </button>
            </div>
        );
    }
    
    return (
        <div className="p-6 border border-gray-300 rounded-xl bg-white shadow-lg w-full max-w-xl">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Acessar o Catálogo</h2>
            
            {authMessage && <p className="text-red-600 mb-4">{authMessage}</p>}
            
            <form onSubmit={handleLogin} className="flex flex-col md:flex-row gap-4 items-center">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading} 
                    className="p-2.5 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoading} 
                    className="p-2.5 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
                />
                <button 
                    type="submit"
                    disabled={isLoading} 
                    className={`
                        px-6 py-2.5 rounded-md text-white font-semibold transition-colors w-full md:w-auto
                        ${isLoading 
                            ? 'bg-gray-500 cursor-not-allowed' 
                            : 'bg-pink-600 hover:bg-pink-700 cursor-pointer' 
                        }
                    `}
                >
                    {isLoading ? 'Entrando...' : 'Entrar'} 
                </button>
            </form>
            
            <p className="mt-4 text-sm text-gray-500">
                Use a credencial de teste para login.
            </p>
        </div>
    );
}