import { useState } from 'react'


function App() {
  const [name, setName] = useState("John");
  const [password, setPassword] = useState("");
  function handleChange(e) {
    console.log(e.target.value);
    setName(e.target.value);
  }
  function handlePassword(e) {
    console.log(e.target.value);
    setPassword(e.target.value);
  }

  return (
    <>
      <form className='App'>
        <label>First name:</label><br />
        <input type="text" value={name} onChange={handleChange} /><br />
        <label>Password:</label><br />
        <input type="text" value={password} onChange={handlePassword} /><br />
      </form >
    </>
  )
}

export default App
