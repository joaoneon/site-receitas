import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Ingredientes.module.css';

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
            <main>
                <h1 className={styles.h1}>Ingredientes</h1>
                <input
                className={styles.ingredientesInput} 
                    type="text"
                    placeholder="Digite o ingrediente"
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                />
                <div className={styles.ingredientesContainer}>
                    {ingredientes
                        .sort((a, b) => a.strIngredient.localeCompare(b.strIngredient))
                        .filter(ingrediente => ingrediente.strIngredient.toLowerCase().includes(filtro.toLowerCase()))
                        .map(ingrediente => (
                            <Link to={`/ingredientes/${ingrediente.strIngredient}`} className={styles.ingrediente} key={ingrediente.idIngredient}>
                                <p>{ingrediente.strIngredient}</p>
                            </Link>
                        ))}
                </div>
            </main>
        </div>
    );
}

export default IngredientesPage;
