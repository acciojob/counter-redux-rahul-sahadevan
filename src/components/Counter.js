import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { increase,decrease } from "../redux/actions/actionFunction";


function Counter(){

    const counter = useSelector((state) =>{
        return state.counter.count
    });
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={()=> dispatch(increase())}>increment</button>
            <button onClick={()=>dispatch(decrease())}>decrement</button>
        </div>
    )
}
export default Counter