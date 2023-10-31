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
            <p>Counter:{counter}</p>
            <button onClick={()=> dispatch(increase())}>Increanse</button>
            <button onClick={()=>dispatch(decrease())}>Decreanse</button>
        </div>
    )
}
export default Counter