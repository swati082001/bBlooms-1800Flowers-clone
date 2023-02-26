import * as types from "./cart.actiontypes"

const initState = {
    isLoading:false,
    isError:false,
    cart:[]
};

const CARTREDUCER = (state=initState,{type,payload})=>{
    switch(type){
        case types.CART_LOADING:{
          return{
            ...state,
            isLoading:true,
            isError:false
          }
        }
        case types.CART_ERROR:{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }
        case types.CART_GET:{
            return{
                ...state,
                isLoading:false,
                isError:false,
                cart:payload
            }
        }
        default:{
            return state
        }
    }

}

export default CARTREDUCER;