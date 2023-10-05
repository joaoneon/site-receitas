import React from 'react';
import { Link } from 'react-router-dom';

function Receita({ meal, style }) {
    return (
        <div className={style.receita}>
            <Link to={{ pathname: `/receita/${meal.idMeal}`, state: { meal } }}>
                <img src={meal.strMealThumb} alt={`Imagem do ${meal.strMeal}`} />
            </Link>
            <div className={style['receita-info']}>
                <div className={style.content}>
                    <h2>{meal.strMeal}</h2>
                    <p>{meal && meal.strInstructions ? meal.strInstructions.substring(0, 150) + "..." : null}</p>
                </div>
                <button onClick={() => window.open(meal.strYoutube, '_blank')}>YouTube</button>
            </div>
        </div>
    );
}

export default Receita;
