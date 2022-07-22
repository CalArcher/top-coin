import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import axios from 'axios'



export default function PriceChart( { name, number } ) {
  const [labelData, setLabelData] = useState([])
  const [priceData, setPriceData] = useState([])
  const [isLoading, setLoading] = useState(true)


  useEffect(() => {
    axios.get('http://localhost:3030/coindata')
      .then(data => {
        let coinDataSorted = data.data.slice(0,10).sort((a,b) => b.percent_change_24h - a.percent_change_24h)
        console.log(coinDataSorted)
        let coinDates = coinDataSorted[number]
        let coinPrices = coinDataSorted[number]
        setLabelData(coinDates)
        setPriceData(coinPrices)
        setLoading(false)
      })

  }, [])

  let toChartDates = [1,2,3]
  let toChartPrices = [1,2,3]

  if(isLoading === false){
    toChartDates = labelData.date
    toChartPrices = priceData.current_price
  }

  const labels = toChartDates
    const data = {
      labels,
      datasets: [
        {
          label: name + ' price',
          data: toChartPrices,
          borderColor: 'rgb(0, 104, 249)',
          backgroundColor: 'rgba(0, 104, 249, 0.5)',
        }
      ],
    }
    const options = {
   
      scales: {
        x: {
          ticks: {
            maxRotation: 0,
            // autoSkip: true,
            // autoSkipPadding: 25
            maxTicksLimit: 7
          }
        }
      },
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
          text:   name + ' price history',
        },
      },
    }
    const chartStyle = {
      width: '100%',
      minWidth: '700px',
      height: '60vh'
    }


  return (

      <div>
        {isLoading ? <span className='col-md-6'>
          
          LOADING...
          
          </span> :
          
          <div className='priceChartWrapper'>
            <div style={chartStyle}>
              <Line className='priceChart' options={options} data={data} />
            </div>
            <h1>{name}</h1>
          </div>
        }


    </div>
   
  )
}
