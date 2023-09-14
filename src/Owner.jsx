import React from 'react'
import './App.css'
import Navbar from './Navbar'

export default function Owner() {
  return (
    <>
      <Navbar />
      <Content/>
    </>
  )
}

const Content = () => {
    return (
        <div className='card' id='owner-content'>
            <h2>Kiki - Group O - 04</h2>
            <img src="https://i.pinimg.com/736x/88/1d/f9/881df98495d5f913241ce6ce5bb9c1c8.jpg" alt="" className='owner-img'/>
            <h2>Short Biology</h2>
            <p>Hello, My name is Atithiya Inthorn. I'm a student of Junior Developer 5 Boot camp by Generation Thailand.</p>
        </div>
        
    )
}
