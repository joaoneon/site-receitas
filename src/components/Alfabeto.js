import React from 'react';

const Alfabeto = ({ onLetraClick, styles }) => {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    return (
        <div className={styles.alfabeto}>
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
