import React, { useEffect, useState } from 'react'

const Counter = (props) => {

    const [autoCount, setAutoCount] = useState(false)

    useEffect(() => {

        let timer;

        if (autoCount) {
            timer = setInterval(() => {
                props.increase()
            }, 1000)
        }

        return () => clearInterval(timer)

    }, [autoCount, props.count])

    return (
        <>
            <h1>Counter</h1>

            <div>
                <h2
                    className='countVal'
                    style={{
                        boxShadow:
                            props.mode === "black"
                                ? "0 0 10px 2px #ccc"
                                : "0 0 10px 2px rgba(0,0,0,0.5)"
                        ,

                    }}
                >
                    Count = <span className='counterValStore'>{props.count}</span>
                </h2>

                <span className='counter_btn'>
                    <button onClick={props.increase}>Increase (+)</button>

                    <button onClick={props.decrease}>Decrease (-)</button>

                    <button onClick={props.reset}>Reset</button>

                    <button onClick={props.setDarkMode}>
                        {props.mode === "white"
                            ? "Dark Mode"
                            : "Light Mode"}
                    </button>

                    <button
                        onClick={() => setAutoCount(!autoCount)}
                        style={{ marginTop: "10px" }}
                    >
                        {autoCount
                            ? "Stop Auto Count"
                            : "Start Auto Count"}
                    </button>
                </span>
            </div >
        </>
    )
}

export default Counter