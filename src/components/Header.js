import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <Link to="/" id="inicio">Início</Link>
                <div id="right-nav">
                    <Link to="nomes">Pesquisar Receitas</Link>
                    <Link to="letras">Receitas por Letra</Link>
                    <Link to="ingredientes">Receitas por Ingredientes</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
