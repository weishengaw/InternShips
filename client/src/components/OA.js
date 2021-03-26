import { useState } from 'react'

const OA = ({ OACount, onClick }) => {
    const [count, setCount] = useState(OACount)
    const onInc = () => {
        onClick("OA", OACount + 1)
        setCount(count + 1)
    }

    return (
        <div>
            <h2>OAs</h2>
            <div>{count}</div>
            <button onClick={onInc}>+1</button>
        </div>
    )
}

export default OA