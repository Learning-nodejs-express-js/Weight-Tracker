import React, { useContext } from 'react'
import {WeightContext} from '../../state/WeightContextProvider'



const useWeights = () => {
  const context=useContext(WeightContext)
  if(!context){
    throw Error("please use inside context")
  }
  return context
}



export default useWeights