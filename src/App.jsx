import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './components/Chat';
import { AddFriends } from './components/AddFriends';
import { Login } from './components/Auths/Login';
import { Signup } from './components/Auths/Signup';
// import { socket } from './components/TestSocket';

function App() {

  return (
    <>
      <Router>
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path="/chats" element={<Chat/>}/>
          <Route path='/add-friends' element={<AddFriends/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          {/* <Route path='/socket' element={<socket/>}/> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
