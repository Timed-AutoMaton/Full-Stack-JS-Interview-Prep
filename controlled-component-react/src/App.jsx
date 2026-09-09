import { useState } from 'react'


function App() {
  const [name, setName] = useState("John");
  const [password, setPassword] = useState("");
  function handleChange(e) {
    // console.log(e.target.name);
    if (e.target.name == "firstName") {
      const capName = (e.target.value).toUpperCase();
      setName(capName);
    }
    else {
      setPassword(e.target.value);
    }
  }
  // function handlePassword(e) {
  //   console.log(e.target.value);
  //   setPassword(e.target.value);
  // }

  return (
    <>
      <form className='App'>
        <label>First name:</label><br />
        <input type="text" name="firstName" value={name} onChange={handleChange} /><br />
        <label>Password:</label><br />
        <input type="text" name="passwordWord" value={password} onChange={handlePassword} /><br />
      </form >
    </>
  )
}

export default App
