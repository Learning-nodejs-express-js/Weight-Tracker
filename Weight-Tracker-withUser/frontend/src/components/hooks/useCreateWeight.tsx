import { useState } from "react"
import useWeights from "./useWeights"
type weighttype={
    _id: string,
    weight: number,
    date: string,
    __v: number
}
const useCreateWeight = () => {
    const {dispatch}=useWeights();
    const [error,setError]=useState<null|string>(null);
    const [loading,setIsLoading]=useState(false);
    const postweight=async(weight:number,date:string)=>{
        setIsLoading(true)
        setError(null)
        try{
            const response=await fetch("http://localhost:4000/weights",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({weight:weight,date:date})
            })
            if(response.ok)
            {
                const newweight:weighttype=await response.json();
                dispatch({type:"ADD_WEIGHT",payload:newweight})
            }
            else{
                const newweight=await response.json();
                setError(newweight.message)
            }
        }
        catch(error){
            setError("server error")
        }
        setIsLoading(false)
    }
    return {error,loading,postweight}
}

export default useCreateWeight