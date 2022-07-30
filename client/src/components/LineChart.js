import React, { useContext } from 'react'
import { Context } from '../contexts/DataContext'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js'
import { ThemeContext } from '../contexts/ThemeContextSet'
ChartJS.register(...registerables)


export default function LineChart({ name, number}) {
  const {check, theme, toggleTheme } = useContext(ThemeContext)
  let bgColor = 'rgba(0, 104, 249, 0.5)'
  let fgColor = 'rgba(29,29,29,.25)'
  let chartColor = 'rgb(0,104,249)'
  let fontColor = 'rgba(29,29,29,1)'
  if(theme === 'dark'){
    fontColor = 'rgba(240,240,240,.6)'
    bgColor = 'rgb(29,29,29)'
    fgColor = 'rgba(240,240,240,.25)'
  }

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
          borderColor: chartColor,
          backgroundColor: bgColor,
        }
      ],
    }
    const options = {
      scales: {
        x: {
          grid: {
            color: fgColor
          },
          ticks: {
            maxRotation: 0,
            maxTicksLimit: 7
          }
        },
        y: {
          grid: {
            color: fgColor
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
          color: fontColor,
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