import {
  USER_LOADING,
  REMOVE_USER,
  USER_ERROR,
  USER_SUCCESS,
} from "./user.actionTypes";

let initialState = {
  loading: false,
  error: false,
  users: [],
};

export let userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case REMOVE_USER: {
      let filteredUser = state.users.filter((el) => el.id !== payload);
      return {
        ...state,
        loading: false,
        users: filteredUser,
      };
    }
    case USER_ERROR: {
      return {
        ...state,
        loading: false,
        error: payload || true,
      };
    }
    case USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        users: payload,
      };
    }

    default: {
      return state;
    }
  }
};
