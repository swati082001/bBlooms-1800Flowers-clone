import {
  ADMIN_LOADING,
  ADMIN_ERROR,
  ADMIN_SUCCESS,
  REMOVE_ADMIN,
  ADD_ADMIN,
} from "./admin.actionTypes";
import axios from "axios";

let headers = {
  Authorization: localStorage.getItem("token"),
};

//addAdmin

export let addAdmin = (creds) => async (dispatch) => {
  dispatch({ type: ADMIN_LOADING });
  try {
    let response = await axios.post(
      `https://weary-red-oyster.cyclic.app/adminusers/register/`,
      creds,
      { headers }
    );

    dispatch({ type: ADD_ADMIN, payload: response.data });
  } catch (error) {
    dispatch({ type: ADMIN_ERROR, payload: error.message });
  }
};

//getADMIN

export let getAdmin = () => async (dispatch) => {
  dispatch({ type: ADMIN_LOADING });
  try {
    let response = await axios.get(
      "https://weary-red-oyster.cyclic.app/adminusers"
    );

    dispatch({ type: ADMIN_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ADMIN_ERROR, payload: error.message });
  }
};

//removeADMIN

export let removeAdmin = (id) => async (dispatch) => {
  dispatch({ type: ADMIN_LOADING });
  try {
    let response = await axios.delete(
      `https://weary-red-oyster.cyclic.app/adminusers/delete/${id}`
    );
    dispatch({ type: REMOVE_ADMIN, payload: id });
  } catch (error) {
    dispatch({ type: ADMIN_ERROR, payload: error.message });
  }
};
