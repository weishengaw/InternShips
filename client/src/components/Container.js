import Applied from './Applied.js';
import Rejected from './Rejected.js';
import OA from './OA.js';
import Interviews from './Interviews.js';
import Offers from './Offers.js';
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
        <div>
                    <Applied onClick={increment} appliedCount={counters.applied}/>
                    <Rejected onClick = {increment} rejectedCount={counters.rejected}/>
                    <OA onClick = {increment} OACount={counters.OA}/>
                    <Interviews onClick = {increment} interviewsCount={counters.interviews}/>
                    <Offers onClick = {increment} offerCount={counters.offers}/>
        </div>
    )
}

export default Container
