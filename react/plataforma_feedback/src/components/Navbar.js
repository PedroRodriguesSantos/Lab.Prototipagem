import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="Title">
                <h1>Plataforma de Feedback</h1>
            </div>

            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/usuario">Usuário</Link>
                </li>
                <li>
                    <Link to="/empresa">Empresa</Link>
                </li>
                <li>
                    <Link to="/recompensas">Recompensa</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
