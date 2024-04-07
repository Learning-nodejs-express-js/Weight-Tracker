import React, { useContext } from 'react'
import {UserContext} from '../../state/UserContextProvider'
const useUser = () => {
  const context=useContext(UserContext);
  if(!context){
    throw Error("please use user context inside user context provider")
  }
  return context;
}

export default useUser