 import { Link } from "react-router-dom"
import "./Navbar.css"

export const Navbar=()=>{
    return (
        <div className="nav">
           <Link to="/">
           <div>Home</div>
           </Link>
            <Link to="/post">
            <div>post</div>
            </Link>
        </div>
    )
}