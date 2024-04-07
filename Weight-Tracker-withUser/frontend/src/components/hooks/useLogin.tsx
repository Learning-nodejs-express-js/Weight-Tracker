import { useState } from "react"
import useUser from "./useUser";

const useLogin = () => {
  const [error,setError]=useState<null|string>(null);
  const [isloading,setIsLoading]=useState(false);
  const {dispatch}=useUser();

  const loginhandler=async(email:string,password:string)=>{
    setIsLoading(true)
    setError(null)
    try{
        const response=await fetch("/users/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({email,password})
        })
        if(response.ok){
            const user=await response.json();
            dispatch({type:"LOGIN",payload:user});
            console.log(user)
        }
        else{
            const usererror=await response.json();
            setError(usererror.message)
        }
    }
    catch(error){
        setError("server is not working")
    }
    setIsLoading(false)
  }

  return {error,isloading,loginhandler}
}

export default useLogin