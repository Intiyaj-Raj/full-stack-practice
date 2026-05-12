import React, { useContext } from 'react'
import Counter from './components/Counter'
import { CounterContext } from './context/CounterContext'

const App = () => {

  const counterState = useContext(CounterContext);
  console.log(("Context", counterState))

  return (
    <div>
      <h1>Counter is {counterState.count}</h1>
      <Counter />
    </div>
  )
}

export default App