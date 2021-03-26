import { useState } from 'react'

const Offers = ({ offerCount, onClick }) => {
    const [count, setCount] = useState(offerCount)
    const onInc = () => {
        onClick("offers", offerCount + 1)
        setCount(count + 1)
    }

    return (
        <div>
            <h2>Offers</h2>
            <div>{count}</div>
            <button onClick={onInc}>+1</button>
        </div>
    )
}

export default Offers


