import { useEffect, useState } from 'react'

function App() {

  const [count, setCount] = useState(0);
  const [data, setData] = useState(10);

  useEffect(() => {
    console.log("Count Changed")
  }, [count]);

  useEffect(() => {
    console.log("Data Changed!")
  }, [data]);

  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <h1>Hello</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>{data}</h1>
      <button onClick={() => setData(data - 1)}>Decrement</button>
    </div>
  )
}

export default App
