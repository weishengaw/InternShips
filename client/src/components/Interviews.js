import { useState } from 'react'

const Interviews = ({ interviewsCount, onClick }) => {
    const [count, setCount] = useState(interviewsCount)
    const onInc = () => {
        onClick("interviews", interviewsCount + 1)
        setCount(count + 1)
    }

    return (
        <div>
            <h2>Interviews</h2>
            <div>{count}</div>
            <button onClick={onInc}>+1</button>
        </div>
    )
}

export default Interviews
