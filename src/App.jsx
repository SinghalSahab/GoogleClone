import { useState } from 'react'
import Home from './pages/Home'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';

function App() {


  return (
    <div>
      <Router>
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<SearchPage />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
