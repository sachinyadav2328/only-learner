import { useState } from 'react'

import './App.css'
import LandingPage from './pages/LandingPage'
import MainLayout from './layout/MainLayout'
import { Route, Routes } from 'react-router-dom'




function App() {
  return (
    <>
       <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<LandingPage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
