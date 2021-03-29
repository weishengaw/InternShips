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
           {/* {!setting && <button class="button" onClick={onDec}>-</button>} */}
           {!setting && <i class="fas fa-minus button" onClick={onDec}></i>}
           {!setting && <i class="fas fa-plus button" onClick={onInc}></i>}
           {/* {!setting && <button class="button" onClick={onInc}>+</button>} */}
           {/* {!setting && <button class="button" onClick={show}>set</button>} */}
           {!setting && <div class="button" onClick={show} style={{display: "inline"}}>set</div>}
           {setting && <form onSubmit={onSubmit}>
                            <input type='number' placeholder={count} onChange={(e) => setNewNum(e.target.value)} />
                            <input type='submit' class="button" value='Confirm'/>
                            <div class="button" onClick={show} style={{display: "inline"}}>Cancel</div>
                       </form>}
        </div>
    )
}

export default Counter
