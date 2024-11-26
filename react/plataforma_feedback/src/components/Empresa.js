import React from 'react';

const Empresa = () => {
    const stats = [
        {
            title: 'Questionários Realizados',
            value: 40,
            icon: '⭐',
        },
        {
            title: 'Recompensas enviadas',
            value: 20,
            icon: '🎁',
        },
        {
            title: 'Alertas',
            value: 25,
            icon: '🔔',
        },
    ];

    const actions = [
        {
            title: 'Criar Questionários',
            description: 'Escolha um modelo de questionário ou crie um novo, disponível na plataforma para seu público alvo.',
            buttonLabel: 'Acessar',
        },
        {
            title: 'Gerenciar Perfil',
            description: 'Atualize suas informações da empresa.',
            buttonLabel: 'Acessar perfil',
        },
        {
            title: 'Criar cupons',
            description: 'Crie cupons para presentear seus usuários.',
            buttonLabel: 'Acessar',
        },
    ];

    return (
        <section className="empresa">
            <h1>Dashboard - SUPERSUL</h1>
            <div className="stats">
                {stats.map((stat, index) => (
                    <div key={index} className="stat">
                        <h3>{stat.title}</h3>
                        <p>{stat.value} <span role="img" aria-label={stat.title}>{stat.icon}</span></p>
                    </div>
                ))}
            </div>

            <div className="actions">
                {actions.map((action, index) => (
                    <div key={index} className="action">
                        <h3>{action.title}</h3>
                        <p>{action.description}</p>
                        <button>{action.buttonLabel}</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Empresa;
