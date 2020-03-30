import React from 'react';

export default function Header({ children }){ // props - pegaria qualquer propriedade
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}