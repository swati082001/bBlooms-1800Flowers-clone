import {
  CAKE_LOADING,
  REMOVE_CAKE,
  CAKE_ERROR,
  CAKE_SUCCESS,
  UPDATE_CAKE,
  ADD_CAKE,
} from "./BirthDayCakes.actionTypes";
import axios from "axios";

let headers = {
  Authorization: localStorage.getItem("token"),
};

//addCake
export let addCake = (data) => async (dispatch) => {
  dispatch({ type: CAKE_LOADING });
  try {
    let response = await axios.post(
      "https://weary-red-oyster.cyclic.app/products/birthday/add",
      data,
      { headers }
    );
    dispatch({ type: ADD_CAKE, payload: response.data });
  } catch (error) {
    dispatch({ type: CAKE_ERROR, payload: error.message });
  }
};

//getCAKE

export let getCake = () => async (dispatch) => {
  dispatch({ type: CAKE_LOADING });
  try {
    let response = await axios.get(
      "https://weary-red-oyster.cyclic.app/products/birthday"
    );

    dispatch({ type: CAKE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: CAKE_ERROR, payload: error.message });
  }
};

//updateCake
export let updateCake = (id, changes) => async (dispatch) => {
  dispatch({ type: CAKE_LOADING });
  try {
    let response = await axios.patch(
      `https://weary-red-oyster.cyclic.app/products/birthday/update/${id}`,
      changes
    );
    dispatch({ type: UPDATE_CAKE, payload: { id, changes } });
  } catch (error) {
    dispatch({ type: CAKE_ERROR, payload: error.message });
  }
};

//removeCAKE

export let removeCake = (id) => async (dispatch) => {
  dispatch({ type: CAKE_LOADING });
  try {
    let response = await axios.delete(
      `https://weary-red-oyster.cyclic.app/products/birthday/delete/${id}`
    );
    dispatch({ type: REMOVE_CAKE, payload: id });
  } catch (error) {
    dispatch({ type: CAKE_ERROR, payload: error.message });
  }
};
