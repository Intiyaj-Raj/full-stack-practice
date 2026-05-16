import React, { useState } from 'react'

const Calculator = () => {

    const [data, setData] = useState("")

    const getValue = (e) => {
        console.log(e.target.value)
        setData(data.concat(e.target.value))
    }

    const calculation = () => {
        setData(eval(data).toString())
    }

    const allClear = () => {
        setData("")
    }
    const del = () => {
        setData(data.slice(0, -1))
    }
    const handleChange = (e) => {

        const value = e.target.value

        if (/^[0-9+\-*/%().e]*$/.test(value)) {
            setData(value)
        }
    }
    return (
        <div className='container'>
            <h1>Basic Calculator</h1>
            <div>
                <input placeholder='0' value={data} onChange={handleChange} />
            </div>

            <button onClick={getValue} value="(">(</button>
            <button onClick={getValue} value=")">)</button>
            <button onClick={getValue} value="%">%</button>
            <button onClick={allClear} value="AC" className='del'>AC</button>

            <button onClick={getValue} value="7">7</button>
            <button onClick={getValue} value="8">8</button>
            <button onClick={getValue} value="9">9</button>
            <button onClick={getValue} value="*">*</button>

            <button onClick={getValue} value="4">4</button>
            <button onClick={getValue} value="5">5</button>
            <button onClick={getValue} value="6">6</button>
            <button onClick={getValue} value="-">-</button>

            <button onClick={getValue} value="1">1</button>
            <button onClick={getValue} value="2">2</button>
            <button onClick={getValue} value="3">3</button>
            <button onClick={getValue} value="+">+</button>

            <button onClick={getValue} value="0">0</button>
            <button onClick={del} value="Del" className='del'>Del</button>
            <button onClick={calculation} id='equal'>=</button>
            <button onClick={getValue} value="/">/</button>
        </div>
    )
}

export default Calculator