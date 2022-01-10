import React, {useState, useEffect,useRef} from 'react'
import CardRow from './CardRow'
import axios from "axios"
function ReProducts(){
    const [repData, setRepData] = useState([[],[]])
    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('http://localhost:4000/reproduced').then(response => setRepData(response.data));
    }, []);
    return(
        <>
            <h1>Reproduced Merchandise ♻️</h1>
            <p>We believe, "<strong>Good Work Speaks for Itself</strong>". Hence, have a look at the products we redeveloped from the kindest donations which would motivate you even more to donate us.</p>
            <CardRow txArr={repData}/>
        </>
    )
}
export default ReProducts