import * as types from "./checkout.actionTypes";
import axios from "axios";

export const Checkout_get = ()=>async(dispatch)=>{
    try {
        dispatch({type:types.CHECKOUT_LOADING})
        const data = await axios.get(`https://weary-red-oyster.cyclic.app/checkout/`)
        dispatch({type:types.CHECKOUT_GET_SUCCESS,payload:data.data})

    } catch (error) {
        dispatch({type:types.CHECKOUT_ERROR})
    }
}

export const Checkout_post = (payload)=> async(dispatch)=>{
    try {
        dispatch({type:types.CHECKOUT_LOADING})
        const data = await axios.post(`https://weary-red-oyster.cyclic.app/checkout/add`,payload)
        console.log(data);
        dispatch({type:types.CHECKOUT_POST_SUCCESS});
    } catch (error) {
        dispatch({type:types.CHECKOUT_ERROR})
    }
}
