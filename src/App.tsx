import Ball from './Ball/Ball';
import './App.css';
import {useState} from 'react';

function App() {
  const [balls, setBalls] = useState([
    {value: 5},
    {value: 11},
    {value: 16},
    {value: 23},
    {value: 32},
  ]);

  const shuffle = (array:number[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const changeValues = () => {
    let arrayNumbers: number[] = [];

    for (let i = 5; i <= 36; i++) {
      arrayNumbers.push(i);
    }

    let newNumbers = shuffle(arrayNumbers).slice(0, 5).sort((a:number, b:number) => a - b);

    setBalls([
      {value: newNumbers[0]},
      {value: newNumbers[1]},
      {value: newNumbers[2]},
      {value: newNumbers[3]},
      {value: newNumbers[4]},
    ]);

  }
  
  return (
    <div className='App'>
      <button type='button' onClick={changeValues}>
        New numbers
      </button>
      <div className='ball-wrapper'>
        <Ball value={balls[0].value} />
        <Ball value={balls[1].value} />
        <Ball value={balls[2].value} />
        <Ball value={balls[3].value} />
        <Ball value={balls[4].value} />
      </div>
    </div>
  );
}

export default App;