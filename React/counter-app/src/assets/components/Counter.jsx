import React from 'react'

const Counter = (props) => {
    return (
        <>
            <h1>Counter</h1>
            <div>
                <h1 className='countVal' style={{ boxShadow: `${props.mode === "#000000e6" ? "#ffffffe6" : "#000000e6"}` }}>count = {props.count}</h1>

                <span>
                    <button onClick={props.increase}>+</button>
                    <button onClick={props.decrease}>-</button>
                    <button onClick={props.reset}>reset</button>
                    <button onClick={props.setDarkMode}>Dark</button>
                </span>

            </div>
        </>
    )
}

export default Counter