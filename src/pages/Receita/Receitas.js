import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styles from './Receitas.module.css';

function listIngredientsAndMeasures(meal) {
    const ingredients = [];
    const measures = [];

    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];

        if (ingredient && ingredient.trim() !== "") {
            ingredients.push(<li key={i}>{ingredient}</li>);
        }

        if (measure && measure.trim() !== "") {
            measures.push(<li key={i}>{measure}</li>);
        }
    }

    return { ingredients, measures };
}

function ReceitaPage() {
    const { id } = useParams();
    const location = useLocation();
    const [meal, setMeal] = useState(location.state?.meal || null);

    useEffect(() => {
        if (meal) return;

        async function fetchMeal() {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                const data = await response.json();
                setMeal(data.meals[0]);
            } catch (error) {
                console.error('Erro ao buscar receita:', error);
            }
        }
        fetchMeal();
    }, [id, meal]);

    if (!meal) {
        return <div>Carregando...</div>;
    }

    const { ingredients, measures } = listIngredientsAndMeasures(meal);

    return (
        <div>
            <main className={styles.main}>
                <h1 className={styles.h1}>{meal.strMeal}</h1>
                <img src={meal.strMealThumb} alt={`Imagem de ${meal.strMeal}`} className={styles.img} />
                <div className={styles.divCategories}>
                <p className={styles.p}><strong>Categoria:</strong> {meal.strCategory}</p>
                <p className={styles.p}><strong>Área:</strong> {meal.strArea}</p>
                <p className={styles.p}><strong>Tags:</strong> {meal.strTags}</p>
                </div>
                <p className={styles.pToMake}>{meal.strInstructions}</p>
                <div className={styles.ingredientesMedidas}>
                    <div className={styles.ingredientes}>
                        <h3 className={styles.h3}>Ingredientes</h3>
                        <ol className={styles.ol}>
                            {ingredients}
                        </ol>

                    </div>
                    <div className={styles.medidas}>
                        <h3 className={styles.h3}>Medidas</h3>
                        <ol className={styles.ol}>
                            {measures}
                        </ol>
                    </div>
                </div>

                <button onClick={() => window.open(meal.strYoutube, '_blank')} className={styles.button}>Assistir no YouTube</button>
                <a href={meal.strSource} className={styles.linkSource} target="_blank" rel="noopener noreferrer">Fonte Original</a>
            </main>
        </div>
    );
}

export default ReceitaPage;
