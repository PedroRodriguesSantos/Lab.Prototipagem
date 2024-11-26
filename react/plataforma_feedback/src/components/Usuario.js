// components/Usuario.js
import React from 'react';

const Usuario = () => {
    return (
        <section className="usuario">
            <h1>Meu Dashboard</h1>
            <div className="cards">
                {/* Cartões de informações */}
                <div className="card">
                    <h3>Questionários Realizados</h3>
                    <p>20 <span role="img" aria-label="star">⭐</span></p>
                </div>
                <div className="card">
                    <h3>Recompensas</h3>
                    <p>6 <span role="img" aria-label="reward">🎁</span></p>
                </div>
                <div className="card">
                    <h3>Alertas</h3>
                    <p>40 <span role="img" aria-label="alert">🔔</span></p>
                </div>

                {/* Cartões com botões */}
                <div className="card">
                    <h3>Responder Questionários</h3>
                    <p>Participe dos questionários disponíveis e ganhe recompensas</p>
                    <button>Responder</button>
                </div>
                <div className="card">
                    <h3>Gerenciar Perfil</h3>
                    <p>Atualize suas informações pessoais e preferências</p>
                    <button>Acessar perfil</button>
                </div>
                <div className="card">
                    <h3>Ver Descontos</h3>
                    <p>Visualize todos os descontos e cupons que você ganhou.</p>
                    <button>Ver descontos</button>
                </div>
            </div>
        </section>
    );
};

export default Usuario;
