import { useState } from 'react'
import Reservation from './Components/Reservation.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    Hello World
    <Reservation></Reservation>
    </div>
  )
}

export default App