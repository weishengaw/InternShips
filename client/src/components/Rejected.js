import { useState } from 'react'

const Rejected = ({ rejectedCount, onClick }) => {
    const [count, setCount] = useState(rejectedCount)
    const onInc = () => {
        onClick("rejected", rejectedCount + 1)
        setCount(count + 1)
    }

    return (
        <div>
            <h2>Rejected</h2>
            <div>{count}</div>
            <button onClick={onInc}>+1</button>
        </div>
    )
}

export default Rejected

