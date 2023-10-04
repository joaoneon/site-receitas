import React, { useState } from 'react';
import Receita from '../../components/Receita';
import './Nomes.css';

const ProcurarReceitaPorNome = () => {
    const [nomeReceita, setNomeReceita] = useState('');
    const [receitas, setReceitas] = useState([]);

    const handleInputChange = (event) => {
        setNomeReceita(event.target.value);
    };

    const pesquisarReceitas = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nomeReceita}`);
        const data = await response.json();

        const receitasOrdenadas = (data.meals || []).sort((a, b) => a.strMeal.localeCompare(b.strMeal));

        setReceitas(receitasOrdenadas);
    };

    return (
        <div>
            <main>
                <h1>Procurar receitas por Nome</h1>
                <input
                    type="text"
                    placeholder="Digite o nome da receita"
                    value={nomeReceita}
                    onChange={handleInputChange}
                    onKeyUp={(e) => e.key === 'Enter' && pesquisarReceitas()}
                />
                <button className="searchButton" onClick={pesquisarReceitas}>Pesquisar</button>
                <div className="receitas-container">
                    {receitas.map(receita => (
                        <Receita key={receita.idMeal} meal={receita} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ProcurarReceitaPorNome;
