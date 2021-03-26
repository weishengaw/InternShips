import { useState } from 'react'

const Applied = ({ appliedCount, onClick }) => {
    const [count, setCount] = useState(appliedCount);
    const onInc = () => {
        onClick("applied", count + 1);
        setCount(count + 1);
    }

    return (
        <div>
           <h2>Applied</h2>
           <div>{count}</div>
           <button onClick={onInc}>+1</button>
        </div>
    )
}

export default Applied
