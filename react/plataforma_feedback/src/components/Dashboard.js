import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registra as escalas e elementos necessários
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
    const satisfactionData = {
        labels: ['Jan', 'Mar', 'Jun', 'Set', 'Dez'],
        datasets: [
            {
                label: 'Satisfação do Cliente',
                data: [85, 87, 90, 92, 95],
                borderColor: 'green',
                fill: false,
            }
        ]
    };

    const responseData = {
        labels: ['Email', 'Chat', 'Telefone'],
        datasets: [
            {
                label: 'Total de Respostas',
                data: [150, 170, 130],
                backgroundColor: ['#4CAF50', '#FFC107', '#2196F3'],
            }
        ]
    };

    const departmentData = {
        labels: ['Eletrônicos', 'Vestuário', 'Alimentos', 'Cosméticos', 'Acessórios'],
        datasets: [
            {
                label: 'Desempenho por Departamento',
                data: [30, 25, 20, 15, 10],
                backgroundColor: ['#FF5733', '#33FF57', '#5733FF', '#FF33A8', '#33D8FF'],
            }
        ]
    };

    return (
        <section className="dashboard">
            <h2>Dashboard Ilustrativo</h2>
            <div className="charts">
                <div className="chart">
                    <h3>Satisfação do Cliente</h3>
                    <Line data={satisfactionData} />
                </div>
                <div className="chart">
                    <h3>Total de Respostas</h3>
                    <Bar data={responseData} />
                </div>
                <div className="chart">
                    <h3>Desempenho por Departamento</h3>
                    <Pie data={departmentData} />
                </div>
            </div>
        </section>
    );
}

export default Dashboard;
