import { useState } from 'react'
import './App.css'
import React, { lazy, Suspense } from "react";
const lazy = React.lazy(() => import('./Complex'));

function App() {


  return (
    <>
      <h1>Learning Code Splitting</h1>
      <Suspense fallback={<p>...loading</p>}>
        <lazy />
      </Suspense>
    </>
  )
}

export default App
