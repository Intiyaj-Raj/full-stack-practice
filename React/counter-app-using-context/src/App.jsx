import React, { useContext } from 'react'
import Counter from './components/Counter'
import { CounterContext } from './context/CounterContext'

import './App.css'

const App = () => {
  const counterState = useContext(CounterContext)

  return (
    <div className="app-shell">
      <h1 className="app-title">Count is {counterState.count}</h1>
      <Counter />
    </div>
  )
}

export default App
