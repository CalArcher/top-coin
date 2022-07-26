import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import axios from 'axios'
import LoadingScreen from './LoadingScreen';
import useFetchData from './useFetchData';


export default function PriceChart( { name, number } ) {
  const { coinData, isLoading } = useFetchData('http://localhost:3030/coindata')

  let toChartDates, toChartPrices, toChartRanks
  let logoLink = ''
  if(!isLoading){
    logoLink = coinData[number].currencyLogo
    toChartRanks = coinData[number].rank
    toChartDates = coinData[number].date
    toChartPrices = coinData[number].current_price
  }

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
          text: `${name}'s performance history while ranked in the top 10 coins of the day`,
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
  let searchName = name.charAt(0).toLowerCase() + name.slice(1)
  let moreCoinInfo = `https://www.coingecko.com/en/coins/${searchName}`

  return (
    <div>
    {isLoading ? <LoadingScreen/>
    :
    <div className='priceChartWrapper'>
      <div className='coinTitle'>
          <img src={logoLink} alt='cryptocurrency logo'></img>
          <a href={moreCoinInfo} target='_blank'>{name}</a>
      </div>
      <div style={chartStyle}>
        <Line className='priceChart' options={options} data={data} />
      </div>
    </div>
    }
    </div>
        
   
  )
}
