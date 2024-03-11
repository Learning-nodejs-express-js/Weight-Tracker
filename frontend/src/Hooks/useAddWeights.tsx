import { useState } from "react"
import useWeights from "./useWeights";

type WeightStateType={
    _id: string;
    weight: number;
    date: string;
    __v: number;
}
type errorstring={
    msg:string
}
const useAddWeights = () => {
  const [error,setError]=useState<string|null>(null)
  const [isloading,setIsLoading]=useState(false)
    const {dispatch}=useWeights()
  const addweights=async(weight:number,date:string)=>{
    try{
      setError(null)
      setIsLoading(true)
      const response=await fetch("/weights",{
          method:"POST",
          headers:{
              "Content-Type":"application/json",
          },
          body:JSON.stringify({weight,date})
      })
      
      if(response.ok){
          const newweight:WeightStateType=await response.json();
          dispatch({type:"ADD_WEIGHT",payload:newweight})
      }
      else{
          const newweight:errorstring=await response.json();
          setError(newweight.msg)
      }
    }
    catch(e){
      setError((e as Error).message)
    }
  }
  return {error,isloading,addweights}
}

export default useAddWeights