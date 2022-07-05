import Container from 'react-bootstrap/Container'
import { Stack, Card } from 'react-bootstrap'
import CoinCard from './components/CoinCard'


function App() {
  return (
  <Container className="my-4">
    <CoinCard name="Nano" currentPrice={15.337} percentChange={0.11491}></CoinCard>
    <CoinCard name="Cardano" currentPrice={1.537} percentChange={0.09891}></CoinCard>
  </Container>
  )
}

export default App
