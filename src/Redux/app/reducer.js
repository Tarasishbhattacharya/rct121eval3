

const initstate={
    loading:false,
    list:[],
    error:false,
}

 export const userReducer=(state=initstate,action)=>{
     switch(action.type){
     case "ADD_USER":{
         return{
            ...state,
            loading:true,
            error:false
         }
      }
      case "ADD_USER_SUCCESS":{
        return{
           ...state,
           loading:false,
           list:action.payload,
        }
     }
     case "ADD_USER_FAILURE":{
        return{
           ...state,
           loading:false,
           error:true
        }
     }
     default:return state
    }
 }