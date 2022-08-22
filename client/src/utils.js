/** @format */

export const currencyFormatter = new Intl.NumberFormat(undefined, {
  currency: 'usd',
  style: 'currency',
  maximumFractionDigits: 5
})

export const percentageFormatter = new Intl.NumberFormat(undefined, {
  style: 'percent',
  maximumFractionDigits: 2
})
