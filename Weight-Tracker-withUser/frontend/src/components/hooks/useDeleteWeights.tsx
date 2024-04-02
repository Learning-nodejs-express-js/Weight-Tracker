import React, { useState } from 'react'
import useWeights from './useWeights';
type weighttype={
    _id: string,
    weight: number,
    date: string,
    __v: number
}

const useDeleteWeights = () => {
    const {dispatch}=useWeights();
    const [error,setError]=useState<null|string>(null)
    const [isloading,setIsLoading]=useState(false);
    const deleteWeights=async(currweight:weighttype)=>{
        setIsLoading(true)
        try{
            setError(null)
            
            const response=await fetch("/weights/"+currweight._id,{
                method:"DELETE"
            });
            const weight=await response.json();
            
            if(response.ok){
                dispatch({type:"DELETE_WEIGHTS",payload:currweight})
            }
            else{
                setError(weight.msg)
            }
        }
        catch(error){
            setError("server not working")
        }

        setIsLoading(false)
    }
    return {error,isloading,deleteWeights}
}

export default useDeleteWeights