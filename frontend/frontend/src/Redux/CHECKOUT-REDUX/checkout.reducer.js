import * as types from "./checkout.actionTypes"

const initState = {
    isLoading:false,
    isError:false,
    checkout:[]
};

const checkoutReducer = (state=initState,{type,payload})=>{
    switch(type){
        case types.CHECKOUT_LOADING:{
          return{
            ...state,
            isLoading:true,
            isError:false
          }
        }
        case types.CHECKOUT_ERROR:{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }
        case types.CHECKOUT_GET_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                isError:false,
                checkout:payload
            }
        }
        default:{
            return state
        }
    }

}

export default checkoutReducer;