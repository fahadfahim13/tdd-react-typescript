import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>This is Counter App</h1>
            <div id="counter-value">{counter}</div>
            <button id="increment-btn" onClick={() => setCounter(counter + 1)}>Increment</button>
            <button id="decrement-btn" onClick={() => (counter > 0)?setCounter(counter - 1):null}>Decrement</button>
        </div>
    )
}

export default Counter;