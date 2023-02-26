import {
  PLANT_LOADING,
  REMOVE_PLANT,
  PLANT_ERROR,
  PLANT_SUCCESS,
  UPDATE_PLANT,
  ADD_PLANT,
} from "./SympathyPlants.actionTypes";
import axios from "axios";

let headers = {
  Authorization: localStorage.getItem("token"),
};

//addPlant

export let addPlant = (data) => async (dispatch) => {
  dispatch({ type: PLANT_LOADING });
  try {
    let response = await axios.post(
      "https://weary-red-oyster.cyclic.app/products/allsympathy/add",
      data,
      { headers }
    );
    dispatch({ type: ADD_PLANT, payload: response.data });
  } catch (error) {
    dispatch({ type: PLANT_ERROR, payload: error.message });
  }
};

//getPLANT

export let getPlant = () => async (dispatch) => {
  dispatch({ type: PLANT_LOADING });
  try {
    let response = await axios.get(
      "https://weary-red-oyster.cyclic.app/products/allsympathy"
    );

    dispatch({ type: PLANT_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: PLANT_ERROR, payload: error.message });
  }
};

//updatePlant
export let updatePlant = (id, changes) => async (dispatch) => {
  dispatch({ type: PLANT_LOADING });
  try {
    let response = await axios.patch(
      `https://weary-red-oyster.cyclic.app/products/allsympathy/update/${id}`,
      changes
    );
    dispatch({ type: UPDATE_PLANT, payload: { id, changes } });
  } catch (error) {
    dispatch({ type: PLANT_ERROR, payload: error.message });
  }
};

//removePLANT

export let removePlant = (id) => async (dispatch) => {
  dispatch({ type: PLANT_LOADING });
  try {
    let response = await axios.delete(
      `https://weary-red-oyster.cyclic.app/products/allsympathy/delete/${id}`
    );
    dispatch({ type: REMOVE_PLANT, payload: id });
  } catch (error) {
    dispatch({ type: PLANT_ERROR, payload: error.message });
  }
};
