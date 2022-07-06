import { Card, Stack, Button } from "react-bootstrap";
import { currencyFormatter, percentageFormatter } from "../utils";

export default function CoinCard({ name, currentPrice, percentChange, dailyChange, rank }) {
  return (
    <Card style={{minWidth: '850px'}}>
      <Card.Body>
      <Stack class="mb-4" direction="horizontal" style={{
          display: 'grid',
          gridTemplateColumns: '45px 1fr 1fr 1fr 1fr 1fr',
          gap: '1rem',
        }}>
          <h5 style={{alignContent: 'center', width: '100%'}}className='me-auto'>{rank}</h5>
          <a className="customLinks" href='#'><h5 className='me-auto'>{name}</h5></a>
          <span class="me-auto">{currencyFormatter.format(currentPrice)}</span>
          <span class="me-auto">{percentageFormatter.format(percentChange)}</span>
          <span class="me-auto">{percentageFormatter.format(dailyChange)}</span>
          <Button variant="primary">Historical Data</Button> 
        </Stack>
      </Card.Body>
    </Card>
  )
}
