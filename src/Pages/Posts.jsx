import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loaduser } from "../Redux/app/action";



export const Posts=()=>{
let dispatch=useDispatch();
let state=useSelector((state)=>state.userReducer.list)
let loadstate=useSelector((state)=>state.userReducer)
const[page,setPage]=useState(1)

useEffect(()=>{
    dispatch(loaduser(page))
},[page])

    return (
       <div>
            {loadstate.loading &&<div>...loading</div> }
            <button onClick={()=>setPage(page+1)}>next</button>
           <button onClick={()=>setPage(page-1)}>prev</button>
       
        <div>
          {state.map((el)=>{
              return <div>

                 <p>Title-{el.title}</p>
                 <p>Title-{el.body}</p>
              </div>
          })}

           
        </div>
        </div>
    )
}