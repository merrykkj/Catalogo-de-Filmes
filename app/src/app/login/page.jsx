'use client';

import LoginComponent from '@/components/LoginComponent';
import { useState } from "react";

const API_URL = 'http://localhost:3001';

export default function AuthPage() {
    const [token, setToken] = useState(null);
    const [statusMessage, setStatusMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [data, setData] = useState([]); 

    const fetchData = async (userToken) => {
        console.log("Tentando buscar dados protegidos...");
        
    };

    const handleLoginSuccess = (newToken, message) => {
        setToken(newToken);
        setIsLoggedIn(true);
        setStatusMessage(message);
        localStorage.setItem('userToken', newToken);
        fetchData(newToken); 
    };

    const handleLogout = () => {
        localStorage.removeItem('userToken');
        setToken(null);
        setIsLoggedIn(false);
        setStatusMessage('Sessão encerrada. Conteúdo pode estar limitado.');
        setData([]); 
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Página de Autenticação</h1>
            {statusMessage && <p style={{ color: 'blue' }}>{statusMessage}</p>}

            <LoginComponent
                onLoginSuccess={handleLoginSuccess}
                onLogout={handleLogout}
                isLoggedIn={isLoggedIn}
            />
        </div>
    )
}