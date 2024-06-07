import React,{useState,useEffect,useCallback,useContext} from "react"
function HooksCount(){
    const [count,setCount] = useState(0);
    const [number,setnumber] = useState(0);
    return(
        <div>
            <h3>Count</h3>
        <div>
            <button onClick={()=>setCount(count+1)}>Increase{count}</button>
        </div>
        <div>
              <button onClick={()=>setnumber(number-1)}>Decrease{number}</button>
        </div>
        </div>
    )
}
export default HooksCount;