import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import axios from 'axios'


//need to use useEffect react hook to achieve below goal

async function getData(){
  let res = await axios.get('http://localhost:3030/coindata')
  let coinDataSorted = await res.data.sort((a,b) => b.percent_change_24h - a.percent_change_24h).slice(0,10)
  console.log(coinDataSorted)
  return coinDataSorted
}

export default function PriceChart( { name, dates, ranks, prices} ) {
  let coinData = getData()
 
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
