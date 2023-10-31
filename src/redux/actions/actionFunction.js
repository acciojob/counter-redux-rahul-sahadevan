import { INCREMENT,DECREMENT } from "./actionType";


export const increase = (value =1)=>{
    return {
        type:INCREMENT,
        value:value
    }
}

export const decrease = ()=>{
    return {
        type:DECREMENT
    }
}