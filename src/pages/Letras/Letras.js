import React, { useState } from 'react';
import Receita from '../../components/Receita';
import Alfabeto from '../../components/Alfabeto'
import styles from './Letras.module.css';

const ReceitasPorLetra = () => {
    const [receitas, setReceitas] = useState([]);

    const handleLetraClick = async (letra) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letra}`);
        const data = await response.json();

        const receitasOrdenadas = (data.meals || []).sort((a, b) => a.strMeal.localeCompare(b.strMeal));

        setReceitas(receitasOrdenadas);
    };

    return (
        <div>
            <main>
                <h1>Receitas por Letra</h1>
                <Alfabeto onLetraClick={handleLetraClick} styles={styles}/>
                <div className={styles["receitas-container"]}>
                    {receitas.map(receita => (
                        <Receita key={receita.idMeal} meal={receita} style={styles}/>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ReceitasPorLetra;
