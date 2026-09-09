import { useState } from 'react';
import './App.css'
import useCounter from './customHooks/useCounter'


function App() {

  const [inputValue, setInputValue] = useState("");
  const { count, increment, decrement, setByValue } = useCounter(0);

  return (
    <>
      <h1>{count}</h1>
      <button>increment</button>
      <button>decrement</button>
      <input type="text" value={inputValue} placeholder='enter value' onChange={(e) => setByValue(e.target.value)} />
      <button>Set Value</button>
    </>
  )
}

export default App
