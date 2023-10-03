// src/components/IngredientesPage.js

import React, { useState, useEffect } from 'react';
import Header from './components/Header';

function IngredientesPage() {
    const [ingredientes, setIngredientes] = useState([]);
    const [filtro, setFiltro] = useState("");

    useEffect(() => {
        async function fetchIngredientes() {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
                const data = await response.json();
                setIngredientes(data.meals);
            } catch (error) {
                console.error('Erro ao buscar ingredientes:', error);
            }
        }
        fetchIngredientes();
    }, []);

    return (
        <div>
        <Header />
        <main>
            <h1>Ingredientes</h1>
            <input 
                type="text" 
                placeholder="Digite o ingrediente" 
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
            />
            <div className="ingredientes-container">
                {ingredientes
                    .sort((a, b) => a.strIngredient.localeCompare(b.strIngredient))
                    .filter(ingrediente => ingrediente.strIngredient.toLowerCase().includes(filtro.toLowerCase()))
                    .map(ingrediente => (
                        <a href="/" className="ingrediente" key={ingrediente.idIngredient}>
                            <p>{ingrediente.strIngredient}</p>
                        </a>
                    ))}
            </div>
        </main>
    </div>
    );
}

export default IngredientesPage;
