import {
  CART_LOADING,
  REMOVE_CART,
  CART_ERROR,
  CART_SUCCESS,
} from "./cart.actionTypes";
import axios from "axios";

//getCART

export let getCart = () => async (dispatch) => {
  dispatch({ type: CART_LOADING });
  try {
    let response = await axios.get("https://weary-red-oyster.cyclic.app/cart");

    dispatch({ type: CART_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: CART_ERROR, payload: error.message });
  }
};

//removeCART

export let removeCart = (id) => async (dispatch) => {
  dispatch({ type: CART_LOADING });
  try {
    let response = await axios.delete(
      `https://weary-red-oyster.cyclic.app/cart/delete/${id}`
    );
    dispatch({ type: REMOVE_CART, payload: id });
  } catch (error) {
    dispatch({ type: CART_ERROR, payload: error.message });
  }
};
