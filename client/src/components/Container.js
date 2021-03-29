import Counter from './Counter.js';
import { useState } from 'react';
const Container = ({ update, userInfo }) => {
    const [counters, setCounters] = useState(userInfo);
    const increment = (type, newAmt) => {
        if (type !== "applied" && type !== "rejected" && type !== "OA" && type !== "interviews" && type !== "offers") {
            console.log("Critical error, counter type not found")
        } else {
            var temp = counters
            switch(type) {
                case "applied":
                    temp.applied = newAmt;
                    break;
                case "rejected":
                    temp.rejected = newAmt;
                    break;
                case "OA":
                    temp.OA = newAmt;
                    break;
                case "interviews":
                    temp.interviews = newAmt;
                    break;
                case "offers":
                    temp.offers = newAmt;
                    break;
            }
            update(temp);
            setCounters(temp);
        }
    }

    
    return (
        <div class="parent">
                    <Counter class="div1" onClick={increment} countType="applied" givenCount={counters.applied}/>
                    <Counter class="div2" onClick = {increment} countType="rejected" givenCount={counters.rejected}/>
                    <Counter class="div3" onClick = {increment} countType="OA" givenCount={counters.OA}/>
                    <Counter class="div4" onClick = {increment} countType="interviews" givenCount={counters.interviews}/>
                    <Counter class="div5" onClick = {increment} countType="offers" givenCount={counters.offers}/>
        </div>
    )
}

export default Container
