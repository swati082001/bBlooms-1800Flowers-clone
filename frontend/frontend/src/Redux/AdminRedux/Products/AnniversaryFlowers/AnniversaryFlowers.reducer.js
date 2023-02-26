import {
  FLOWER_LOADING,
  REMOVE_FLOWER,
  FLOWER_ERROR,
  FLOWER_SUCCESS,
  UPDATE_FLOWER,
  ADD_FLOWER,
} from "./AnniversaryFlowers.actionTypes";

let initialState = {
  loading: false,
  error: false,
  flowers: [],
};

export let FlowerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FLOWER_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case ADD_FLOWER: {
      return {
        ...state,
        flowers: [...state.flowers, payload],
      };
    }

    case UPDATE_FLOWER: {
      let updatedFlowers = state.flowers.map((flower) => {
        if (flower.id === payload.id) {
          return { ...flower, payload };
        }
        return flower;
      });
      return {
        ...state,
        flowers: updatedFlowers,
      };
    }
    case REMOVE_FLOWER: {
      let filteredFlower = state.flowers.filter((el) => el.id !== payload);
      return {
        ...state,
        loading: false,
        flowers: filteredFlower,
      };
    }
    case FLOWER_ERROR: {
      return {
        ...state,
        loading: false,
        error: payload || true,
      };
    }
    case FLOWER_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        flowers: payload,
      };
    }

    default: {
      return state;
    }
  }
};
