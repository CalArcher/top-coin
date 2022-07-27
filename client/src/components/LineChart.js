import React, { useContext } from 'react'
import { Context } from '../hooks/SetContext'
import { Line } from 'react-chartjs-2';

export default function LineChart({ name, number}) {
  
  const [{ coinDataSorted, currentNames }, setState] = useContext(Context)

  console.log("Names",currentNames)
  console.log('coindatasorted',coinDataSorted)

  let toChartRanks = coinDataSorted[number].rank
  let toChartDates = coinDataSorted[number].date
  let toChartPrices = coinDataSorted[number].current_price

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

 
    const loadStyle = {
      width: '100%',
      minWidth: '700px',
      height: '60vh',
      filter: 'blur(10px)'
    }
    return (<Line className='priceChart' options={options} data={data} />)

}
