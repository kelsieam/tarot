import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import theFoolImage from '/home/kelsiethefirst/src/tarot/src/assets/RWS_Tarot_00_Fool.jpg'
import theMagicianImage from '/home/kelsiethefirst/src/tarot/src/assets/RWS_Tarot_01_Magician.jpg'

function App() {
  const [count, setCount] = useState(0)
  const [spread, setSpread] = useState("")

  // function handleSetSpread(selectedSpread) {
  //   console.log("handleSetSpread", spread);
  //   
  // }

  function handleSelectSpread() {
    console.log("handleSelectedSpread", event.target.value);
    const selectedSpread = event.target.value
    setSpread(selectedSpread);
  }

  return (
    <>
      <div>

          <img src={theFoolImage} className="logo" />  
          <img src={theMagicianImage} className="logo" />

      </div>
      <div className="card" id="singleCard">
        {/* <button onClick={handleSetSpread}> */}
        spread is {spread}
        <h1>{spread}</h1>
        {/* </button> */}
      </div>
      <div>
        <select name="spread" onChange={handleSelectSpread}>
          <option value="singleCard" onClick={handleSelectSpread}>single card</option>
          <option value="pastPresentFuture" onClick={handleSelectSpread}>past present future</option>
        </select>
        {/* <button onClick={handleSetSpread}>
          select
        </button> */}
      </div>
    </>
  )
}

export default App
