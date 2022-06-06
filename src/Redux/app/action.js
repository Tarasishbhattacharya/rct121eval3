import axios from "axios"

const addUser=()=>{
    return {
        type:"ADD_USER",
    }
}
const addUsersuccess=(data)=>{
    return {
        type:"ADD_USER_SUCCESS",
        payload:data
    }
}
const addUserfailure=()=>{
    return {
        type:"ADD_USER_FAILURE",
    }
}


export function loaduser(page){
    return function (dispatch){
        dispatch(addUser())
        axios.get("https://jsonplaceholder.typicode.com/posts",{
            params:{
                _page:page,
                per_page:5
            }
        })
        .then((res)=>dispatch(addUsersuccess(res.data)))
        .catch((err)=>dispatch(addUserfailure()))
    }
}
export function createUser(data){
    return function (dispatch){
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)

        }).then(()=>dispatch(loaduser))
       
    }
}