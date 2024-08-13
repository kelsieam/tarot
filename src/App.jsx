import { useState } from 'react'
import './App.css'
import theFoolImage from './assets/RWS_Tarot_00_Fool.jpg'
import theMagicianImage from './assets/RWS_Tarot_01_Magician.jpg'
import highPriestessImage from './assets/RWS_Tarot_02_High_Priestess.jpg'

function App() {
  const [count, setCount] = useState(0)
  const [spread, setSpread] = useState("")

  function handleSelectSpread() {
    console.log("handleSelectedSpread", event.target.value);
    const selectedSpread = event.target.value
    setSpread(selectedSpread);
  }

  return (
    <>
      <div>
          <h2>Single Card</h2>
          <img src={theMagicianImage} className="card-image" />

      </div>      
      <div>
          <h2>Past, Present, Future</h2>
          <img src={theFoolImage} className="card-image" />  
          <img src={theMagicianImage} className="card-image" />
          <img src={highPriestessImage} className="card-image" />

      </div>
      <div>
        spread is {spread}
        <h1>{spread}</h1>
      </div>
      <div>
        <select name="spread" onChange={handleSelectSpread}>
          <option value="singleCard" onClick={handleSelectSpread}>single card-image</option>
          <option value="pastPresentFuture" onClick={handleSelectSpread}>past present future</option>
        </select>
      </div>
    </>
  )
}

export default App
