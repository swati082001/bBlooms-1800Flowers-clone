import {
  PLANT_LOADING,
  REMOVE_PLANT,
  PLANT_ERROR,
  PLANT_SUCCESS,
  UPDATE_PLANT,
  ADD_PLANT,
} from "./SympathyPlants.actionTypes";

let initialState = {
  loading: false,
  error: false,
  plants: [],
};

export let PlantReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PLANT_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case ADD_PLANT: {
      return {
        ...state,
        plants: [...state.plants, payload],
      };
    }

    case UPDATE_PLANT: {
      let updatedPlants = state.plants.map((plant) => {
        if (plant.id === payload.id) {
          return { ...plant, payload };
        }
        return plant;
      });
      return {
        ...state,
        plants: updatedPlants,
      };
    }

    case REMOVE_PLANT: {
      let filteredPlant = state.plants.filter((el) => el.id !== payload);
      return {
        ...state,
        loading: false,
        plants: filteredPlant,
      };
    }
    case PLANT_ERROR: {
      return {
        ...state,
        loading: false,
        error: payload || true,
      };
    }
    case PLANT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        plants: payload,
      };
    }

    default: {
      return state;
    }
  }
};
