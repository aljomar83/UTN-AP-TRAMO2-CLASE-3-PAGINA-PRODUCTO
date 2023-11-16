import './App.css'
import { Card } from './Components/Card/Card'

function App() {
  
  const producto={
    "id": "Pasteleria01",
    "tittle": "CupCake de vainilla con Merengue Italiano",
    "price": 500,
    "condition": "Listo para consumo",
    "freeshipping": true,
    "thumbnail": "./imgs/cupcakeBasicoVainilla.png",
  }

  return (
    <>
      <div>
        <Card producto={producto}/>
      </div>
    </>
  )
}

export default App
