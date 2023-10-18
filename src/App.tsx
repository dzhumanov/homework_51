import Ball from './Ball/ball'
import './App.css'
import { useState } from 'react'

function App() {
  return (
      <div className='App'>
        <button type='button'>New numbers</button>
        <div className="ball-wrapper">
          <Ball value={5}/>
          <Ball value={11}/>
          <Ball value={16}/>
          <Ball value={23}/>
          <Ball value={32}/>
        </div>
      </div>
  )
}

export default App
