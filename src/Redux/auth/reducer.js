


const initstate={
    islogin:false,
    token:null,
    email:""
}

export const Loginreducer=(state=initstate,action)=>{
    switch(action.type){
        case"LOGIN_SUCCESS":{
            return{
                ...state,
                islogin:true,
                token:action.payload.token,
                email:action.payload.email
            }
        }
        case"LOGIN_FAILURE":{
            return{
                ...state,
                islogin:false,
                token:null,
                email:""
            }
        }
        default:return state
    }
}