import React, { useState } from 'react';
import Header from './components/Header'; 
import Alfabeto from './components/Alfabeto'; 
import Receita from './components/Receita';

const ReceitasPorLetra = () => {
    const [receitas, setReceitas] = useState([]);

    const handleLetraClick = async (letra) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letra}`);
        const data = await response.json();

        setReceitas(data.meals || []);
    };

    return (
        <div>
        <Header />
        <main>
            <h1>Receitas por Letra</h1>
            <Alfabeto onLetraClick={handleLetraClick} />
            <div className="receitas-container">
                {receitas.map(receita => (
                    <Receita key={receita.idMeal} meal={receita} />
                ))}
            </div>
        </main>
    </div>
    );
};

export default ReceitasPorLetra;
