import {
  FLOWER_LOADING,
  REMOVE_FLOWER,
  FLOWER_ERROR,
  FLOWER_SUCCESS,
  UPDATE_FLOWER,
  ADD_FLOWER,
} from "./AnniversaryFlowers.actionTypes";
import axios from "axios";

let headers = {
  Authorization: localStorage.getItem("token"),
};

//addFlower

export let addFlower = (data) => async (dispatch) => {
  dispatch({ type: FLOWER_LOADING });
  try {
    let response = await axios.post(
      "https://weary-red-oyster.cyclic.app/products/allflower/add",
      data,
      { headers }
    );
    dispatch({ type: ADD_FLOWER, payload: response.data });
  } catch (error) {
    dispatch({ type: FLOWER_ERROR, payload: error.message });
  }
};

//getFLOWER

export let getFlower = () => async (dispatch) => {
  dispatch({ type: FLOWER_LOADING });
  try {
    let response = await axios.get(
      "https://weary-red-oyster.cyclic.app/products/allflower"
    );

    dispatch({ type: FLOWER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FLOWER_ERROR, payload: error.message });
  }
};

//updateFlower

export let updateFlower = (id, changes) => async (dispatch) => {
  dispatch({ type: FLOWER_LOADING });
  try {
    let response = await axios.patch(
      `https://weary-red-oyster.cyclic.app/products/allflower/update/${id}`,
      changes
    );
    dispatch({ type: UPDATE_FLOWER, payload: { id, changes } });
  } catch (error) {
    dispatch({ type: FLOWER_ERROR, payload: error.message });
  }
};

//removeFLOWER

export let removeFlower = (id) => async (dispatch) => {
  dispatch({ type: FLOWER_LOADING });
  try {
    let response = await axios.delete(
      `https://weary-red-oyster.cyclic.app/products/allflower/delete/${id}`
    );
    dispatch({ type: REMOVE_FLOWER, payload: id });
  } catch (error) {
    dispatch({ type: FLOWER_ERROR, payload: error.message });
  }
};
