import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { createUser } from "../Redux/app/action"
import { userlogin } from "../Redux/auth/action"
import { Navbar } from "./Navbar"




export const Home=()=>{
    const state=useSelector((state)=>state.Loginreducer)
    const[detail,setDetail]=useState({email:"",password:""})
    const[user,setUser]=useState({title:"",body:""})
    let dispatch=useDispatch()
    let navigate=useNavigate()

    const handlechange=(e)=>{
      setDetail({...detail,[e.target.name]:e.target.value})
    }
    const handleuserchange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
      }
    const handlesubmit=(e)=>{
        e.preventDefault();
        dispatch(userlogin(detail))
        navigate("/post")
    }
    const handleusersubmit=(e)=>{
        e.preventDefault();
        dispatch(createUser(user))
       navigate("/post")
    }
    console.log(user)
    
    return (
        <div>
        {!state.islogin?<div>
          <input type="email" name="email" id="email" onChange={handlechange} />
         <input type="password" name="password" id="password"  onChange={handlechange} />
           <button onClick={handlesubmit}>Login</button>
         </div>:<div>
         <input type="text" name="title" id="title" onChange={handleuserchange} />
         <input type="text" name="body" id="body"  onChange={handleuserchange} />
         <button onClick={handleusersubmit}>add user</button>
             </div>}
        </div>
    )
}