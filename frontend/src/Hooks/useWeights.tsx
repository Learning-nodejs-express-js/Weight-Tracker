import { useContext } from 'react';
import {WeightContext} from '../StateManagement/WeightContextProvider'
const useWeights = () => {
   const context=useContext(WeightContext);
    if(!context){
        throw Error("please use weight inside the context")
    }
  return context;
}

export default useWeights