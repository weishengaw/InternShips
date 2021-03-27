import { useState } from 'react'

const Counter = ({ givenCount, onClick, countType }) => {
    const [count, setCount] = useState(givenCount);
    const [setting, setSetting] = useState(false);
    const [newNum, setNewNum] = useState(count);
    const onInc = () => {
        onClick(countType, count + 1);
        setCount(count + 1);
    }
    const onDec = () => {
        onClick(countType, count - 1);
        setCount(count - 1);
    }
    const onSubmit = (e) => {
        onClick(countType, newNum);
        setCount(newNum);
        show();
    }
    const show = () => {
        setSetting(!setting);
    }

    return (
        <div>
           <h2>{countType}</h2>
           {!setting && <div>{count}</div>}
           {!setting && <button onClick={onInc}>+1</button>}
           {!setting && <button onClick={onDec}>-1</button>}
           {!setting && <button onClick={show}>set</button>}
           {setting && <form onSubmit={onSubmit}>
                            <input type='number' placeholder={count} onChange={(e) => setNewNum(e.target.value)} />
                            <input type='submit' value='Confirm'/>
                            <button onClick={show}>Cancel</button>
                       </form>}
        </div>
    )
}

export default Counter
