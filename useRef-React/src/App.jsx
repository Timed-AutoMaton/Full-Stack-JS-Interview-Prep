import { useState } from 'react';
import './App.css';
import { useRef } from 'react';

function App() {
  const refElement = useRef("");
  const [name, setName] = useState("Zubi");
  console.log(refElement);
  function reset() {
    setName("");
    refElement.current.focus();
  }

  function handleInput() {
    refElement.current.style.color = "blue";
    refElement.current.value = "khal";
  }

  return (
    <>
      <h1>Learning useRef</h1>
      <input ref={refElement} type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={reset}>Reset</button>
      <button onClick={handleInput}>handle input</button>
    </>
  );
}

export default App
