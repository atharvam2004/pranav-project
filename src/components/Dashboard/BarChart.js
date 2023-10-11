import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
import "../../styles/Dashboard/BarChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '',
    },
  },
};
console.log(faker.datatype.number())
const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Guest',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
      backgroundColor: 'rgba(152, 216, 158, 1)',

    },
    {
      label: 'User',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
      backgroundColor: 'rgba(238, 132, 132, 1)',

    },
  ],
};

export default function App() {
  return <div className='bchart-container'>
    <div className='chart-titles'>
    <h1 className='bchart-title'>Activities</h1>
    <spam className='bchart-spam'>May - June 2021</spam>
    </div>

    <Bar options={options} data={data} />;
  </div>
  
}