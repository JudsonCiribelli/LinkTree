import { onAuthStateChanged } from "firebase/auth";
import { ReactNode,  useEffect, useState} from "react";
import { Navigate } from "react-router-dom";

import { auth } from "../services/firebaseConnection";


interface PrivateRouteProps{
  children: ReactNode;
}
export const PrivateRoute = ( {children}: PrivateRouteProps ) => {
  const [loading, setLoading] = useState(true)
  const [signed, setSigned] = useState(false)
  
  useEffect(() =>{
    
    const unSub = onAuthStateChanged(auth, (user) => {

      if(user){
        const userData = {
          uid: user?.uid,
          email: user?.email,
        }
        localStorage.setItem("@reactlinks", JSON.stringify(userData))
        setLoading(false)
        setSigned(true)
      }else{
        setLoading(false)
        setSigned(false)
      }

    })

    return () => {
     unSub()
    }

  },[])
  

  if(loading){
    return <div></div>
  }
  if(!signed){
    return <Navigate to="/login"/>
  }
  return children
}