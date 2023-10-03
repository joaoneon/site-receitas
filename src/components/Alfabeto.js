import React from 'react';

const Alfabeto = ({ onLetraClick }) => {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    return (
        <div className="alfabeto">
            {letras.map(letra => (
                <a 
                    key={letra} 
                    href="/" 
                    onClick={(e) => {
                        e.preventDefault();
                        onLetraClick(letra);
                    }}
                >
                    {letra}
                </a>
            ))}
        </div>
    );
};

export default Alfabeto;