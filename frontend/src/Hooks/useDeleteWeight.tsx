import { useState } from "react"
import useWeights from "./useWeights"

type WeightStateType ={
    _id: string;
    weight: number;
    date: string;
    __v: number;
  }
const useDeleteWeight = () => {
 const [error,setError]=useState<null|string>(null)
 const [isloading,setIsLoading]=useState(false)
 const {dispatch}=useWeights()
 const deleteweight=async(eachweight:WeightStateType)=>{
    try{
        setError(null)
        setIsLoading(true)
       const response=await fetch("/weights/"+eachweight._id,{
        method:"DELETE"
       })
       
       if(response.ok){
        const deleteweight=await response.json();
        dispatch({type:"DELETE",payload:eachweight})
       }
       else{
        const deleteweight:{msg:string}=await response.json();
        setError(deleteweight.msg)
       }
       setIsLoading(false)
    }
    catch(e){
        setError((e as Error).message)
    }
    
 }
 return {error,isloading,deleteweight}

}

export default useDeleteWeight