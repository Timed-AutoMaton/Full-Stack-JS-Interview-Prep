import { useState } from 'react'
import './App.css'

function App() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  return (



    <div className="App">
      <h1>Learning useMemo</h1>
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <span>{add}</span>
      <button onClick={() => setMinus(minus - 1)}>Substraction</button>
      <span>{minus}</span>
    </div>
  )
}

export default App
