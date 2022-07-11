import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'


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
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        caretSize: 10,
        caretPadding: 5,
        padding: 12
      },
      legend: {
        display: false
      },
      title: {
        display: true,
        text: name + ' price history',
      },
    },
  }
  const chartStyle = {
    width: '100%',
    minWidth: '700px',
    height: '60vh'
  }

  return (
    <div className='priceChartWrapper'>
      <div style={chartStyle}>
        <Line className='priceChart' options={options} data={data} />
      </div>
    </div>
    
  )
}
