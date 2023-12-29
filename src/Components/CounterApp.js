import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { increase, decrease, reset } from "../redux/features/counter/counterSlice"



const CounterApp = () => {
   const count =  useSelector(state => state.counter.b.x )
   console.log(count)
    const dispatch = useDispatch()


    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch(increase())}> Increase</button>
            <button
                onClick={() => dispatch(decrease())}
            > Decrease</button>
            <button
                onClick={() => dispatch(reset())}
            > Reset</button>
        </div>
    )


}

export default CounterApp;