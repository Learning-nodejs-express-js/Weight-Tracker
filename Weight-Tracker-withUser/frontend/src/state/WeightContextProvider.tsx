import { createContext, useEffect, useReducer } from "react"

type weighttype={
    _id: string,
    weight: number,
    date: string,
    __v: number
}

type addweights={
    type:"ADD_WEIGHTS",
payload:weighttype[]
}
type deleteweights={
    type:"DELETE_WEIGHTS",
    payload:weighttype
}

type weightactiontype=addweights|deleteweights


type weightcontexttype={
    state: weighttype[], 
    dispatch: React.Dispatch<weightactiontype>
}


const WeightReducer=(state:weighttype[],action:weightactiontype)=>{
    switch(action.type){
        case "ADD_WEIGHTS":
            return action.payload
        case "DELETE_WEIGHTS":
            return state.filter((weight)=>{return weight._id!==action.payload._id;})
        default:
            return state;
    }
}


export const WeightContext=createContext<null | weightcontexttype>(null)

const WeightContextProvider = ({children}:{children:React.ReactNode}) => {
    const [state,dispatch]=useReducer(WeightReducer,[] as weighttype[])
    
    useEffect(()=>{
        const fetchweights=async()=>{
            try{
                const response=await fetch("/weights")
                const weights=await response.json()
                dispatch({type:"ADD_WEIGHTS",payload:weights})
            }
            catch(error){
                dispatch({type:"ADD_WEIGHTS",payload:[]})
            }
        }
        fetchweights()
    },[])



  return(<WeightContext.Provider value={{state,dispatch}}>
    {children}
  </WeightContext.Provider>)
}

export default WeightContextProvider