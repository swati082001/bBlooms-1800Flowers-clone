import {
  USER_LOADING,
  REMOVE_USER,
  USER_ERROR,
  USER_SUCCESS,
} from "./user.actionTypes";
import axios from "axios";

//getUser

export let getUser = () => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  try {
    let response = await axios.get("https://weary-red-oyster.cyclic.app/users");

    dispatch({ type: USER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: USER_ERROR, payload: error.message });
  }
};

//removeUser

export let removeUser = (id) => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  try {
    let response = await axios.delete(
      `https://weary-red-oyster.cyclic.app/users/delete/${id}`
    );
    dispatch({ type: REMOVE_USER, payload: id });
  } catch (error) {
    dispatch({ type: USER_ERROR, payload: error.message });
  }
};
