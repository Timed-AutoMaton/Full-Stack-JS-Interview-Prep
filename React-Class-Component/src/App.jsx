import { useState } from 'react'
import { NewCounter } from './components/NewCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black min-h-screen'>
      <NewCounter />
    </div>
  )
}

export default App
