import React from 'react';

const Recompensas = () => {
  const rewards = [
    {
      title: '10% de Desconto',
      description: 'User este desconto em sua próxima compra',
      expiration: 'Válido até 29/12/2024',
      buttonLabel: 'Resgatar',
    },
    {
      title: 'R$ 20,00 de Desconto',
      description: 'Você ganhou este valor em dinheiro para usar em qualquer compra acima de R$ 50,00',
      expiration: 'Válido até 29/12/2024',
      buttonLabel: 'Resgatar',
    },
    {
      title: 'Rodízio de Pizza',
      description: 'Você ganhou um rodízio de pizza!',
      expiration: 'Válido até 29/12/2024',
      buttonLabel: 'Resgatar',
    },
    {
      title: '15% de Desconto',
      description: 'User este desconto em sua próxima compra',
      expiration: 'Válido até 29/12/2024',
      buttonLabel: 'Resgatar',
    },
    {
      title: 'Top Store',
      description: 'Você ganhou um kit de beleza',
      expiration: 'Válido até 29/12/2024',
      buttonLabel: 'Resgatar',
    },
    {
      title: 'R$ 50,00 de Desconto',
      description: 'Você ganhou este valor em dinheiro para usar em qualquer compra acima de R$ 250,00',
      expiration: 'Válido até 29/12/2024',
      buttonLabel: 'Resgatar',
    }
  ];

  return (
    <section className="recompensas">
      <h1>Suas Recompensas</h1>
      <p>Aqui estão as recompensas que você ganhou ao participar dos questionários.</p>
      <div className="cards">
        {rewards.map((reward, index) => (
          <div key={index} className="card">
            <h3>{reward.title}</h3>
            <p>{reward.description}</p>
            <p>{reward.expiration}</p>
            <button>{reward.buttonLabel}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recompensas;
