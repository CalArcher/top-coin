import React, { useContext } from 'react'
import { Context } from '../contexts/DataContext'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js'
import annotationPlugin from 'chartjs-plugin-annotation'
import { ThemeContext } from '../contexts/ThemeContextSet'
import { ThemeColors, DarkThemeColors, LightThemeColors } from '../ThemeColors'
ChartJS.register(...registerables, annotationPlugin)

export default function LineChart({ name, number }) {
  const { check, theme, toggleTheme } = useContext(ThemeContext);

  let bgColor = LightThemeColors.bgColor
  let gridColor = LightThemeColors.gridColor
  const redColor = ThemeColors.redColor
  const greenColor = ThemeColors.greenColor
  const chartColor = ThemeColors.chartColor
  const chartColorThin = ThemeColors.charColorThin
  let fontColor = LightThemeColors.fontColor
  let strokeColor = LightThemeColors.strokeColor

  if (theme === "dark") {
    strokeColor = DarkThemeColors.strokeColor
    fontColor = DarkThemeColors.fontColor
    bgColor = DarkThemeColors.bgColor
    gridColor = DarkThemeColors.gridColor
  }

  const nameNoDash = formatName(name)

  const [
    { coinData, currentNames, sortState, setSortState, topCoin },
    setState,
  ] = useContext(Context);

  const allChartRanks = coinData[number].rank;
  const rLength = allChartRanks.length;
  const allChartDates = coinData[number].date;
  const dLength = allChartDates.length;
  const allChartPrices = coinData[number].current_price;
  const pLength = allChartPrices.length;

  //Right now, a coin's date, rank, or price array lengths likely won't get to over 100 for > 1 year.
  
  const toChartRanks =
    rLength > 100 ? allChartRanks.slice(rLength - 100, dLength) : allChartRanks;
  const toChartDates =
    dLength > 100 ? allChartDates.slice(dLength - 100, dLength) : allChartDates;
  const toChartPrices =
    pLength > 100
      ? allChartPrices.slice(pLength - 100, pLength)
      : allChartPrices;

  const lineStart = +toChartPrices[0].toFixed(4);

  const labels = toChartDates;
  const data = {
    labels,
    datasets: [
      {
        label: name + " price",
        pointStyle: "circle",
        pointHoverRadius: 6,
        pointHoverBackgroundColor: chartColorThin,
        pointHoverBorderColor: chartColor,
        pointRadius: 2,
        data: toChartPrices,
        borderColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea, data, scales } = chart;
          if (!chartArea) {
            return null;
          }
          return getGradient(ctx, chartArea, data, scales);
        },
        backgroundColor: bgColor,
        tension: 0.3,
        pointHitRadius: 8,
        pointHitDetectionRadius: 8,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        title: {
          color: fontColor,
        },
        grid: {
          color: gridColor,
        },
        ticks: {
          color: fontColor,
          maxRotation: 0,
          maxTicksLimit: 7,
        },
      },
      y: {
        ticks: {
          color: fontColor,
          callback: function (value, index, ticks) {
            value = +value.toFixed(5);
            return "$" + value;
          },
        },
        grid: {
          color: gridColor,
        },
      },
    },
    responsive: true,
    interaction: {
      intersect: false,
      mode: "index",
    },
    maintainAspectRatio: false,
    plugins: {
      autocolors: false,
      annotation: {
        annotations: {
          line1: {
            type: "line",
            yMin: lineStart,
            yMax: lineStart,
            borderColor: strokeColor,
            borderWidth: 2.25,
            borderDash: [20, 8],
            label: {
              display: true,
              content: `$ ${lineStart}`,
              backgroundColor: strokeColor,
              color: fontColor,
              height: "40px",
              width: "70px",
              position: "center",
            },
          },
        },
      },
      tooltip: {
        displayColors: false,
        titleSpacing: 0,
        bodySpacing: 6,
        footerSpacing: 0,
        callbacks: {
          afterBody: function (context) {
            return `Rank: ${toChartRanks[context[0].dataIndex]}`;
          },
        },
        caretSize: 10,
        caretPadding: 5,
        padding: 15,
      },
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `${nameNoDash}'s performance history while ranked in the top 10 coins of the day`,
        color: fontColor,
        font: {
          weight: "bold",
          size: "18px",
        },
      },
    },
  };

  function getGradient(ctx, chartArea, data, scales) {
    const { left, right, top, bottom, width, height } = chartArea;
    const { x, y } = scales;
    const gradientBorder = ctx.createLinearGradient(0, 0, 0, bottom);
    const shift = y.getPixelForValue(data.datasets[0].data[0]) / bottom;
    gradientBorder.addColorStop(0, greenColor);
    gradientBorder.addColorStop(shift, greenColor);
    gradientBorder.addColorStop(shift, redColor);
    gradientBorder.addColorStop(1, redColor);
    return gradientBorder;
  }

  return (
    <Line id="myChart" className="priceChart" options={options} data={data} />
  )
}


function formatName(coinId) {
  let idArray = coinId.charAt(0).toUpperCase() + coinId.slice(1)
  idArray = idArray.split('')
  for (let i = 0; i < idArray.length; i++) {
    if (idArray[i] === '-') {
      idArray[i] = ' '
      idArray[i + 1] = idArray[i + 1].toUpperCase()
    }
  }
  return idArray.join('')
}