import axios from "axios"

const authSuccess=(token,email)=>{
    return {
        type:"LOGIN_SUCCESS",
        payload:{
            token:token,
            email:email
        }
    }
}

 const authFailure=()=>{
    return {
        type:"LOGIN_FAILURE"
    }
}
export function userlogin(data){
    return function(dispatch){
        axios.post("https://reqres.in/api/login",data)
        .then((res)=>dispatch(authSuccess(res.data.token,data.email)))
        .catch(()=>dispatch(authFailure()))
    }
}


