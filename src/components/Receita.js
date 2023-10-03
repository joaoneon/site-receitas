import React from 'react';

function Receita(props) {
    return (
        <div className="receita">
            <a href={props.meal.strSource} target="_blank" rel="noopener noreferrer">
                <img src={props.meal.strMealThumb} alt={`Imagem do ${props.meal.strMeal}`} />
            </a>
            <div className="receita-info">
                <div className='content'>
                    <h2>{props.meal.strMeal}</h2>
                    <p>{props.meal.strInstructions.substring(0, 150)}...</p>
                </div>
                <button onClick={() => window.open(props.meal.strYoutube, '_blank')}>YouTube</button>
            </div>
        </div>
    );
}

export default Receita;
