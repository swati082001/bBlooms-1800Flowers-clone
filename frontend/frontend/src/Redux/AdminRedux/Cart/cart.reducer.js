import {
  CART_LOADING,
  REMOVE_CART,
  CART_ERROR,
  CART_SUCCESS,
} from "./cart.actionTypes";

let initialState = {
  loading: false,
  error: false,
  carts: [],
};

export let cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CART_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case REMOVE_CART: {
      let filteredCart = state.carts.filter((el) => el.id !== payload);
      return {
        ...state,
        loading: false,
        carts: filteredCart,
      };
    }
    case CART_ERROR: {
      return {
        ...state,
        loading: false,
        error: payload || true,
      };
    }
    case CART_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        carts: payload,
      };
    }

    default: {
      return state;
    }
  }
};
