import { createContext,useEffect,useReducer } from "react"

type user={
    email:string,
    token:string
}
type contextproviderchildtype={
    children:React.ReactNode
}
type useractiontype1={
    type:"LOGIN",
    payload:user
}
type useractiontype2={
    type:"LOGOUT",
}
type useractiontype=useractiontype1|useractiontype2

type usercontextvalue={
    state:user|null,
    dispatch:React.Dispatch<useractiontype>,
}
const userReducer=(state:user|null,action:useractiontype)=>{
    switch(action.type){
        case "LOGIN":
            localStorage.setItem("user",JSON.stringify(action.payload));
            return action.payload;
        case "LOGOUT":
            localStorage.removeItem("user")
            return null;
        default:
            return state;
    }
}

export const UserContext=createContext<null|usercontextvalue>(null);



const UserContextProvider = ({children}:contextproviderchildtype) => {
 const [state,dispatch]=useReducer(userReducer,null);
 useEffect(()=>{
    try{
        if(localStorage.getItem("user")){
            const userispresent:any=localStorage.getItem("user");
            dispatch({type:"LOGIN",payload:JSON.parse(userispresent)})
        }
    }
    catch(error){

    }
 },[])
 
 return (
    <UserContext.Provider value={{state,dispatch}}>
        {children}
    </UserContext.Provider>
  )
}


export default UserContextProvider