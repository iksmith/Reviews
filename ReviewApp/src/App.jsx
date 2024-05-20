import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Create from './pages/Create'
import Review from './pages/Review'
import NoPage from './pages/NoPage'


import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/review' element={<Review />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
