import React, { useState } from 'react'
import './App.css'
import Counter from './assets/components/Counter'
const App = () => {

  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1);
  }
  const decrease = () => {
    if (count === 0) {
      alert("Counter cannot go below 0")
    }
    else {
      setCount(count - 1);
    }
  }

  const reset = () => {
    setCount(0)
  }

  const [mode, setMode] = useState("white");

  const setDarkMode = () => {
    if (mode == "white") {
      setMode("black")
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
    }
    else {
      setMode("white")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"

    }
  }


  return (
    <div>
      <Counter increase={increase} count={count}
        decrease={decrease} reset={reset} setDarkMode={setDarkMode} mode={mode} />
    </div>




  )
}

export default App