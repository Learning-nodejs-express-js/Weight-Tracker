import { createContext, useEffect, useReducer } from "react"


type weightType={
    _id: string,
    weight: number,
    date: string,
     __v: number
}
type actiontype={
    type:"ADD_WEIGHTS",
    payload:weightType[]
}
type contexttype={
    state: weightType[];
    dispatch: React.Dispatch<actiontype>; 
}
type childrentype={
    children:React.ReactNode
}

const weigtReducer=(state:weightType[],action:actiontype)=>{
    switch(action.type){
        case "ADD_WEIGHTS":
            return action.payload
        default:
            return state;
    }
}


export const WeightContext=createContext<null|contexttype>({} as contexttype);


const WeightContextProvider = ({children}:childrentype) => {
  const [state,dispatch]=useReducer(weigtReducer,[])

    useEffect(()=>{
        const fetchweights=async()=>{
            try{
                const response=await fetch("/weights")
                const weights=await response.json()     
                dispatch({type:"ADD_WEIGHTS",payload:weights})
            }
            catch(err){
                dispatch({type:"ADD_WEIGHTS",payload:[]})
            }
        }
        fetchweights()
    },[])
    
 return(<WeightContext.Provider value={{state,dispatch}}>
    {children}
 </WeightContext.Provider>
 )
}

export default WeightContextProvider