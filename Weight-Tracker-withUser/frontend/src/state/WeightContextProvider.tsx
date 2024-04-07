import { createContext, useEffect, useReducer } from "react"
import useUser from "../components/hooks/useUser"

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

type addweight={
type:"ADD_WEIGHT",
payload:weighttype
}
type logout={
    type:"LOGOUT",
    
}

type weightactiontype=addweights|deleteweights|addweight|logout


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
        case "ADD_WEIGHT":
            return [...state,action.payload]
        case "LOGOUT":
            return [];
        default:
            return state;
    }
}


export const WeightContext=createContext<null | weightcontexttype>(null)

const WeightContextProvider = ({children}:{children:React.ReactNode}) => {
    const [state,dispatch]=useReducer(WeightReducer,[] as weighttype[])
    const {state:userstate}=useUser()
    useEffect(()=>{
        const fetchweights=async()=>{
            try{
                if(userstate){
                    const response=await fetch("/weights",{
                        method:"GET",
                        headers:{
                            "Content-type":"application/json",
                            "authorization":`Bearer ${userstate.token}`
                        }
                    })
                    const weights=await response.json()
                    dispatch({type:"ADD_WEIGHTS",payload:weights})
                }
            }
            catch(error){
                dispatch({type:"ADD_WEIGHTS",payload:[]})
            }
        }
        fetchweights()
    },[userstate])



  return(<WeightContext.Provider value={{state,dispatch}}>
    {children}
  </WeightContext.Provider>)
}

export default WeightContextProvider