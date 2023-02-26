import {
  CAKE_LOADING,
  REMOVE_CAKE,
  CAKE_ERROR,
  CAKE_SUCCESS,
  UPDATE_CAKE,
  ADD_CAKE,
} from "./BirthDayCakes.actionTypes";

let initialState = {
  loading: false,
  error: false,
  cakes: [],
};

export let CakeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CAKE_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case ADD_CAKE: {
      return {
        ...state,
        cakes: [...state.cakes, payload],
      };
    }

    case UPDATE_CAKE: {
      let updatedCakes = state.cakes.map((cake) => {
        if (cake.id === payload.id) {
          return { ...cake, payload };
        }
        return cake;
      });
      return {
        ...state,
        cakes: updatedCakes,
      };
    }

    case REMOVE_CAKE: {
      let filteredCake = state.cakes.filter((el) => el.id !== payload);
      return {
        ...state,
        loading: false,
        cakes: filteredCake,
      };
    }
    case CAKE_ERROR: {
      return {
        ...state,
        loading: false,
        error: payload || true,
      };
    }
    case CAKE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        cakes: payload,
      };
    }

    default: {
      return state;
    }
  }
};
