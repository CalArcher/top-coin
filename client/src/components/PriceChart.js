import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import axios from 'axios'


//need to use useEffect react hook to achieve below goal




export default function PriceChart( { name, dates, ranks, prices} ) {

  const [labelData, setLabelData] = useState([])
  const [priceData, setPriceData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3030/coindata')
      .then(data => {
        let coinDataSorted = data.data.slice(0,10)
        console.log(coinDataSorted)
        let coinDates = coinDataSorted[6].date
        let coinPrices = coinDataSorted[6].current_price
        setLabelData(coinDates)
        setPriceData(coinPrices)
      })

  }, [])
  const labels = labelData
  const data = {
    labels,
    datasets: [
      {
        label: name + ' price',
        data: priceData,
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
