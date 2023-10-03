// src/App.js
import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';


function App() {

  const [meals, setMeals] = useState([]);
  const numMeals = 6; // Número de refeições

  useEffect(() => {
    async function fetchRandomMeal() {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await response.json();
        return data.meals[0];
      } catch (error) {
        console.error('Erro ao buscar dados da refeição:', error);
      }
    }
    Promise.all(Array.from({ length: numMeals }, () => fetchRandomMeal()))
      .then(data => setMeals(data));
  }, []);


  return (
    <div className="App">
          <header>
        <nav>
            <a href="/" id="inicio">Início</a>
            <div id="right-nav">
                <a href="#">Pesquisar Receitas</a>
                <a href="#">Receitas por Letra</a>
                <a href="#">Receitas por Ingredientes</a>
            </div>
        </nav>
    </header>
    <main>
        <h1>Receitas Aleatórias</h1>
     <div className="receitas-container">
      {meals.map((meal, index) => (
  <div className="receita" key={index}>
    <a href={meal.strSource} target="_blank" rel="noopener noreferrer">
        <img src={meal.strMealThumb} alt={`Imagem do ${meal.strMeal}`} />
    </a>
    <div className="receita-info">
      <div className='content'>
        <h2>{meal.strMeal}</h2>
        <p>{meal.strInstructions.substring(0, 150)}...</p>
      </div>
        <button onClick={() => window.open(meal.strYoutube, '_blank')}>YouTube</button>
    </div>
  </div>
      ))}
    </div>
    </main>
    </div>
  );
}

export default App;
