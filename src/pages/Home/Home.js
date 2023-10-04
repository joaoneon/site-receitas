// src/App.js
import React from 'react';
import './Home.css';
import { useState, useEffect } from 'react';
import Receita from '../../components/Receita';

function App() {

  const [meals, setMeals] = useState([]);
  const numMeals = 6;
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
      <main>
        <h1>Receitas Aleatórias</h1>
        <div className="receitas-container">
          {meals.map((meal, index) => (
            <Receita key={meal.idMeal} meal={meal}></Receita>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
