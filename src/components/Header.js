import React from 'react';

function Header() {
    return (
        <header>
            <nav>
                <a href="/" id="inicio">Início</a>
                <div id="right-nav">
                    <a href="/">Pesquisar Receitas</a>
                    <a href="/">Receitas por Letra</a>
                    <a href="/">Receitas por Ingredientes</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
