import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const Counter = () => {
    const counterContext = useContext(CounterContext)

    return (
        <div className="counter-card">
            <div className="counter-actions">
                <button
                    type="button"
                    className="btn btn-accent"
                    onClick={() => counterContext.setCount(counterContext.count + 1)}
                >
                    Increment
                </button>

                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => counterContext.setCount(counterContext.count - 1)}
                >
                    Decrement
                </button>

                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => counterContext.setCount(counterContext.count + 5)}
                >
                    Increment 5
                </button>
                <button type="button" className='btn btn-danger1' onClick={() => { counterContext.setCount(counterContext.count = 0) }}>
                    Reset
                </button>
            </div>
        </div >
    )
}

export default Counter

