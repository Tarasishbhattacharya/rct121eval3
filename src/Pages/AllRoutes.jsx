import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Privateroute } from "./Privateroute" 

import { Posts } from "./Posts"

export const Allroutes=()=>{
    return (

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/post" element={<Privateroute>
                <Posts/>
            </Privateroute>}/>
        </Routes>
    )
}