import { useState } from 'react'

import './App.css'
import Sidebar from './components/Header/Sidebar'
import Home from './components/Home/Home'

function App() {
  return (
    <>
      <div className="app">
          <Sidebar />
          <Home />
      </div>

    </>
  )
}

export default App
