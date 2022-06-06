import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"



export const Privateroute=({children})=>{
  const state=useSelector((state)=>state.Loginreducer)

  if(state.islogin){
      return children
  }

  <Navigate to="/"/>
}