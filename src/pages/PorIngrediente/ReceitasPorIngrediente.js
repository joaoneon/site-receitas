import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Receita from '../../components/Receita';
import styles from './ReceitasPorIngrediente.module.css';

const ReceitasPorIngrediente = () => {
    const { ingrediente } = useParams();
    const [receitas, setReceitas] = useState([]);

    useEffect(() => {
        const fetchReceitas = async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`);
            const data = await response.json();

            const receitasOrdenadas = (data.meals || []).sort((a, b) => a.strMeal.localeCompare(b.strMeal));

            setReceitas(receitasOrdenadas);
        };

        fetchReceitas();
    }, [ingrediente]);

    return (
        <div className={styles['receitas-container']}>
            {receitas.map(receita => (
                <Receita key={receita.idMeal} meal={receita} style={styles} />
            ))}
        </div>
    );
};

export default ReceitasPorIngrediente;
