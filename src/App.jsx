import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './components/chat';

function App() {

  return (
    <>
      <Router>
      <Routes>
          <Route path="/" element={<Chat/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
