import Ball from './Ball/ball'
import './App.css'
import { useState } from 'react'

function App() {
  const [balls, setBalls] = useState([
    {value: 5},
    {value: 11},
    {value: 16},
    {value: 23},
    {value: 32},
  ])

  const changeValues = () => {
    setBalls([
      {value: randomValue()},
      {value: randomValue()},
      {value: randomValue()},
      {value: randomValue()},
      {value: randomValue()},
    ])
  }

  const randomValue = () => {
    return Math.floor(Math.random() * (36 - 5 + 1)) + 5;
  }

  return (
      <div className='App'>
        <button type='button' onClick={changeValues}>New numbers</button>
        <div className="ball-wrapper">
          <Ball value={balls[0].value}/>
          <Ball value={balls[1].value}/>
          <Ball value={balls[2].value}/>
          <Ball value={balls[3].value}/>
          <Ball value={balls[4].value}/>
        </div>
      </div>
  )
}

export default App
