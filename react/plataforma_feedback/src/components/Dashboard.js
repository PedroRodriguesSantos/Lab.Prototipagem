import React from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

// Registrar os componentes necessários do Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
    // Dados para o gráfico de linha (Satisfação do Cliente)
    const dataLine = {
        labels: ["Jan", "Mar", "Jun", "Set", "Dez"],
        datasets: [
            {
                label: "Satisfação do Cliente",
                data: [75, 80, 85, 90, 95], // Percentual de satisfação
                fill: false,
                borderColor: "green",
                tension: 0.1,
            },
        ],
    };

    // Dados para o gráfico de barras (Total de Respostas)
    const dataBar = {
        labels: ["Email", "Chat", "Telefone"],
        datasets: [
            {
                label: "Total de Respostas",
                data: [150, 170, 130],
                backgroundColor: "blue",
            },
        ],
    };

    // Dados para o gráfico de pizza (Desempenho por Departamento)
    const dataPie = {
        labels: ["Eletroeletrônicos", "Vestuário", "Alimentos", "Cosméticos", "Acessórios"],
        datasets: [
            {
                data: [30, 25, 20, 15, 10],
                backgroundColor: ["#00A5FF", "#FF5733", "#FFC300", "#D16CFF", "#8A2BE2"],
                borderColor: "white",
                borderWidth: 2,
            },
        ],
    };

    // Opções para o gráfico de pizza com legenda à direita
    const optionsPie = {
        plugins: {
            legend: {
                position: "right", // Coloca a legenda à direita do gráfico
                labels: {
                    boxWidth: 20, // Tamanho do quadrado de cor
                    padding: 10,  // Espaçamento entre o gráfico e o texto da legenda
                    font: {
                        size: 14, // Tamanho da fonte
                    },
                },
            },
        },
        responsive: true, // Garante que o gráfico seja responsivo
        maintainAspectRatio: false, // Permite que o gráfico ocupe o espaço disponível
    };

    return (
        <section className="dashboard">
            <h1>Dashboard Ilustrativo</h1>
            <div className="charts">
                <div className="chart">
                    <h3>Satisfação do Cliente</h3>
                    <Line data={dataLine} />
                </div>
                <div className="chart">
                    <h3>Total de Respostas</h3>
                    <Bar data={dataBar} />
                </div>
                <div className="chart">
                    <h3>Desempenho por Departamento</h3>
                    <div className="chart-container">

                        <Pie data={dataPie} options={optionsPie} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
