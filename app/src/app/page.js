'use client';

import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = 'http://localhost:3001';

export default function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);




    const fetchData = async (userToken = null) => {
        setLoading(true);
        setError(null);

        const currentToken = userToken || localStorage.getItem('userToken');
        
        try {
            const config = {};
            
            if (currentToken) {
                config.headers = {
                    Authorization: `Bearer ${currentToken}`
                };
            }

            const response = await axios.get(`${API_URL}/filmes`, config);
            setData(response.data);
            setIsLoggedIn(!!currentToken); 
            
        } catch (err) {
            console.error("Erro ao buscar dados:", err);
            
            if (err.response?.status === 401) {
                handleLogout(); 
                setError("Sua sessão expirou ou não está autorizada. Faça login.");
            } else {
                setError("Não foi possível carregar os dados.");
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const storedToken = localStorage.getItem('userToken');
        
        if (storedToken) {
            setToken(storedToken);
            setIsLoggedIn(true);
            fetchData(storedToken);
        } else {
            fetchData(null); 
        }
    }, []);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Catálogo de Filmes</h1>
            
            {statusMessage && <p style={{ color: isLoggedIn ? 'green' : 'orange', fontWeight: 'bold' }}>{statusMessage}</p>}

            
            <h2 style={{ marginTop: '30px' }}>Filmes Disponíveis</h2>
            
            {loading ? (
                <p>Carregando dados...</p>
            ) : error ? (
                <p style={{ color: 'red', padding: '10px', border: '1px dashed red' }}>{error}</p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {Array.isArray(data) && data.map((item) => (
                        <li key={item.id} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
                            {item.url_capa && (
                                <img
                                    src={item.url_capa}
                                    alt={`Capa do filme: ${item.titulo}`}
                                    style={{ width: '80px', height: '120px', objectFit: 'cover', marginRight: '20px', borderRadius: '4px' }}
                                />
                            )}
                            <div>
                                <strong style={{ fontSize: '1.1em' }}>{item.titulo}</strong> ({item.ano_lancamento})
                                <p style={{ fontSize: '0.9em', color: '#666', marginTop: '5px' }}>{item.sinopse.substring(0, 150)}...</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}