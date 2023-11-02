import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './components/chat';
import { AddFriends } from './components/AddFriends';

function App() {

  return (
    <>
      <Router>
      <Routes>
          <Route path="/chats" element={<Chat/>}/>
          <Route path='/add-friends' element={<AddFriends/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
