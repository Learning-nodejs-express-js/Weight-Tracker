import { createContext, useEffect, useReducer } from "react";

type weightStateType={
_id:string,
weight:number,
date:string,
__v:number
}
type weightActionType1={
    type:"ADD_WEIGHTS",
    payload: weightStateType[]
}
type weightActionType2={
    type:"ADD_WEIGHT",
    payload:weightStateType
}
type weightActionType3={
    type:"DELETE",
    payload:weightStateType
}
type weightActionType=weightActionType1 | weightActionType2| weightActionType3;

type weightchildtype={
    children:React.ReactNode
}
type valuetype={
    state:weightStateType[],
    dispatch:React.Dispatch<weightActionType>
}

const weightReducer=(state:weightStateType[],action:weightActionType)=>{
    switch(action.type){
        case "ADD_WEIGHTS":
            return [...action.payload];
        case "ADD_WEIGHT":
            return [...state,action.payload]
        case "DELETE":
            return state.filter((weight)=>{return weight._id!==action.payload._id})
        default:
            return state;
    }
}


export const WeightContext=createContext<valuetype>({} as valuetype)

const WeightContextProvider=({children}:weightchildtype)=>{

    const [state,dispatch]=useReducer(weightReducer,[]);

    useEffect(()=>{
        const getWeights=async()=>{
            const respose=await fetch("/weights")
            const weights=await respose.json()
           
            if(respose.ok){
                dispatch({type:"ADD_WEIGHTS",payload:weights})
            }
        }
       getWeights()
    },[])
    return(
        <WeightContext.Provider value={{state,dispatch}}>
            {children}
        </WeightContext.Provider>
    )

}
export default WeightContextProvider;