import * as types from "./cart.actiontypes";
import axios from "axios";

//get cart data

export let getCart = () => async (dispatch) => {
    dispatch({ type: types.CART_LOADING });
    try {
    //   let response = await axios.get("https://weary-red-oyster.cyclic.app/");
  
      dispatch({ type:types.CART_GET, payload: response.data });
    } catch (error) {
      dispatch({ type: types.CART_ERROR });
    }
  };

  //delete cart data

  export const DeleteCart = ()=>async(dispatch)=>{
    try {
        dispatch({type:types.CART_LOADING})
        const res = await axios.delete()
        getCart()
        dispatch({type:types.CART_DELETE})
    } catch (error) {
        dispatch({type:types.CART_ERROR})
    }
  }

