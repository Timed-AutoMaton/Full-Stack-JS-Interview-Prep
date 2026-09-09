import { useState } from 'react'
import './App.css'
import withCardLook from './utils/withCardLook'
import Alpha from "./components/Alpha";
import Beta from './components/Beta';


function App() {
  const WithCardLookAlpha = withCardLook(Alpha);
  const WithCardLookBeta = withCardLook(Beta);

  return (
    <>
      <WithCardLookAlpha />
      <WithCardLookBeta />
    </>
  )
}

export default App
