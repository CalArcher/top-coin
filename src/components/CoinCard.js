import { Card, Stack, Button } from "react-bootstrap";
import { currencyFormatter, percentageFormatter } from "../utils";

export default function CoinCard({ name, currentPrice, percentChange }) {
  return (
    <Card>
      <Card.Body>
        <Stack class='mb-4' direction='horizontal'>
          <h3 className='me-auto'>{name}</h3>
          <span class="me-auto">{currencyFormatter.format(currentPrice)}</span>
          <span class="me-auto">{percentageFormatter.format(percentChange)}</span>
          <Button variant="primary">Historical Data</Button> 
        </Stack>
      </Card.Body>
    </Card>
  )
}
