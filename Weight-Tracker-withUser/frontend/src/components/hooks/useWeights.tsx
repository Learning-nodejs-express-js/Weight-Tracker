import { useContext } from "react";
import { WeightContext } from "../../state/WeightContextProvider";


const useWeights = () => {
 const context=useContext(WeightContext)
 if(!context){
  throw Error("please use weights hooks inside the WeightContext Provider itself")
 }
 return context;
}

export default useWeights