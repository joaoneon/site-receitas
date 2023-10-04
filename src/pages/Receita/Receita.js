import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './Receita.css';

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
            <main>
                <h1>{meal.strMeal}</h1>
                <img src={meal.strMealThumb} alt={`Imagem de ${meal.strMeal}`} />
                <p>Categoria: {meal.strCategory}</p>
                <p>Área: {meal.strArea}</p>
                <p>Tags: {meal.strTags}</p>

                <div className="ingredientes-medidas">
                    <div className="ingredientes">
                        <h3>Ingredientes</h3>
                        <ol>
                            {ingredients}
                        </ol>
                    </div>
                    <div className="medidas">
                        <h3>Medidas</h3>
                        <ol>
                            {measures}
                        </ol>
                    </div>
                </div>

                <button onClick={() => window.open(meal.strYoutube, '_blank')}>Assistir no YouTube</button>
                <a href={meal.strSource} className="botao-source" target="_blank" rel="noopener noreferrer">Site original da receita</a>
            </main>
        </div>
    );
}

export default ReceitaPage;
