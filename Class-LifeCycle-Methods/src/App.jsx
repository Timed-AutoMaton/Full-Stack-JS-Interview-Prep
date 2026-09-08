import { useEffect, useState } from 'react'
import Alpha from './components/Alpha';

function App() {

  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      minHeight: '100vh',
      padding: '20px'
    }}>
      {toggle && <Alpha />}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  )
}

export default App
