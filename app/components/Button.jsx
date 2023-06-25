'use client'
import { useState } from "react"

const Button = () => {
    
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <button onClick={()=>setCounter(counter + 1)}>Button {counter}</button>

        </div>
    )
}

export default Button