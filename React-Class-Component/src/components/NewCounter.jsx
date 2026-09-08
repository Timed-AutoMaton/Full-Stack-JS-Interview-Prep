import { useState } from "react"

export const NewCounter = ({ name }) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    return (
        <>
            <h2 className="color-black">{name}</h2>
            <div className="flex">
                <button onClick={() => setCount(count - 1)}>-</button>
                <h2>{count}</h2>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>



            <div className="flex">
                <button onClick={() => setCount2(count2 - 1)}>-</button>
                <h2>{count2}</h2>
                <button onClick={() => setCount2(count2 + 1)}>+</button>
            </div>
        </>
    )
}