import * as types from "./cart.actiontypes";
import axios from "axios";

//get cart data

export let getCart = () => async (dispatch) => {
    dispatch({ type: types.CART_LOADING });
    try {
      let response = await axios.get("https://weary-red-oyster.cyclic.app/cart/");
      dispatch({ type:types.CART_GET, payload: response.data });
    } catch (error) {
      dispatch({ type: types.CART_ERROR });
    }
  };

  //delete cart data

  export const DeleteCart = (id)=>async(dispatch)=>{
    try {
        dispatch({type:types.CART_LOADING})
        const res = await axios.delete(`https://weary-red-oyster.cyclic.app/cart/delete/${id}`)
        //  getCart()
        dispatch({type:types.CART_DELETE})
    } catch (error) {
        dispatch({type:types.CART_ERROR})
    }
  }

