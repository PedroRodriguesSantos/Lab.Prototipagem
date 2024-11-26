import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="Title">
                <h1>Plataforma de Feedback</h1>
            </div>

            <br />

            <ul className="nav-links">
                <li>Home</li>
                <li>Empresa</li>
                <li>Usuário</li>
                <li>Recompensas</li>
            </ul>
        </nav >
    );
}

export default Navbar;
