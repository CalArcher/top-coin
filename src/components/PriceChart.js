import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


//need to define an array here of all days (dates) as the labels, and the data will be an array of the prices on those days

export default function PriceChart( { name } ) {

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: name + ' price',
        data: [1,1,2,3,4.5,9,33,],
        borderColor: 'rgb(0, 104, 249)',
        backgroundColor: 'rgba(0, 104, 249, 0.5)',
      }
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      Tooltip: {
        // TODO: Figure out how to customize Tooltip
      },
      title: {
        display: true,
        text: name + ' price history',
      },
    },
  }

  const chartStyle = {
    width: '1000px',
    height: '500px',
  }

  return (
    <div style={chartStyle}>
      <Line options={options} data={data} />
    </div>
    
  )
}
