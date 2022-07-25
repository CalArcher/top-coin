import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import axios from 'axios'
import LoadingScreen from './LoadingScreen';



export default function PriceChart( { name, number } ) {
  const [chartData, setChartData] = useState([])
  const [isLoading, setLoading] = useState(true)


  useEffect(() => {
    axios.get('http://localhost:3030/coindata')
      .then(data => {
        let coinDataSorted = data.data.slice(0,10).sort((a,b) => b.percent_change_24h - a.percent_change_24h)
        console.log(coinDataSorted)
        let chartData = coinDataSorted[number]
        setChartData(chartData)
        setLoading(false)
      })

  }, [])

  let toChartRanks = [1,2,3]
  let toChartDates = [1,2,3]
  let toChartPrices = [1,2,3]
  let logoLink = ''

  if(isLoading === false){
    logoLink = chartData.currencyLogo
    toChartRanks = chartData.rank
    toChartDates = chartData.date
    toChartPrices = chartData.current_price
  }
  console.log()
  const labels = toChartDates
    const data = {
      labels,
      datasets: [
        {
          label: name + ' price',
          pointStyle: 'circle',
          pointHoverRadius: 7,
          pointHoverBackgroundColor: 'rgba(255, 0, 0, 0.5)',
          pointHoverBorderColor: 'rgba(255, 0, 0, 1)',
          pointRadius: 3,
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
            maxTicksLimit: 7
          }
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          titleSpacing: 0,
          bodySpacing: 6,
          footerSpacing: 0,
          callbacks: {
            afterBody: function(context){
              return `Rank: ${toChartRanks[context[0].dataIndex]}`
            }
          },
          caretSize: 10,
          caretPadding: 5,
          padding: 15
        },
        legend: {
          display: false
        },
        title: {
          display: true,
          text: `History of ${name} being in the top 10 best performing coins of the day`,
          font: {
            weight: 'bold',
            size: '18px'
          }
        },
      },
    }

    const chartStyle = {
      width: '100%',
      minWidth: '700px',
      height: '60vh'
    }
    const loadStyle = {
      width: '100%',
      minWidth: '700px',
      height: '60vh',
      filter: 'blur(10px)'
    }


  return (
      <div>
        {isLoading ? 
          <LoadingScreen></LoadingScreen>
        :
          <div className='priceChartWrapper'>
            <div className='coinTitle'>
                <img src={logoLink} alt='cryptocurrency logo'></img>
                <h1>{name}</h1>
            </div>
            <div style={chartStyle}>
              <Line className='priceChart' options={options} data={data} />
            </div>
          </div>
        }


    </div>
   
  )
}
