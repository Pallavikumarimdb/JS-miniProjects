import React, { useState, useRef } from 'react';

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Counter></Counter>
    </>
  )
}
// import React, {useState} from "react"

export default App


function Counter() {

  const [count, setCount] = useState(0);

  function IncreaseCount() {
    setCount(count + 1);
  }

  function DecreaseCount() {
    setCount(count - 1);
  }

  function ResetCount() {
    setCount(0);
  }

// ..............................................................

const [infiCount, setInfiCount] = useState(0);
  const myTimeout = useRef(null);  // Use useRef to store the interval ID

  // Function to start incrementing the counter every 1 seconds
  function IncreaseInfi() {
    // Clear any existing interval before setting a new one
    clearInterval(myTimeout.current);

    myTimeout.current = setInterval(() => {
      setInfiCount(infiCount => infiCount + 1);  // Use functional update to access the latest state
    }, 1000);
  }

  // Function to start decrementing the counter every 1 seconds
  function DecreaseInfi() {
    // Clear any existing interval before setting a new one
    clearInterval(myTimeout.current);

    myTimeout.current = setInterval(() => {
      setInfiCount(infiCount => infiCount - 1);  // Use functional update to access the latest state
    }, 1000);
  }

  // Function to reset the counter
  function ResetInfi() {
    setInfiCount(0);
    clearInterval(myTimeout.current);  // Also stop the interval when resetting
  }

  // Function to pause the interval
  function PauseInfi() {
    clearInterval(myTimeout.current);  // Stop the interval
  }


  // .....................................................................

  
  return (
    <div className='main-div'>
      <div className='simple-counter'>
        <h1>Simple Counter</h1>
        <h1>{count}</h1>
        <button onClick={IncreaseCount} type="button">Increase Count</button>
        <button onClick={DecreaseCount} ype="button">Decrease Count</button>
        <button onClick={ResetCount} type="button">Reset Count</button>
      </div>

      <div className='infinite-counter'>
        <h1>Infinite Counter</h1>
        <h1>{infiCount}</h1>
        <button onClick={IncreaseInfi} type="button">Increase</button>
        <button onClick={DecreaseInfi} ype="button">Decrease </button>
        <button onClick={PauseInfi} type="button">Pause</button>
        <button onClick={ResetInfi} type="button">Reset</button>
      </div>
    </div>
  )
}
