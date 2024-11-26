import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';


// Registra as escalas e elementos necessários
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {

    return (
        <section className="dashboard">
            <h1>Dashboard Ilustrativo</h1>
            <div className="image">

            </div>
        </section>
    );
}

export default Dashboard;
