import {
  ADMIN_LOADING,
  ADMIN_ERROR,
  ADMIN_SUCCESS,
  REMOVE_ADMIN,
  ADD_ADMIN,
} from "./admin.actionTypes";

let initialState = {
  loading: false,
  error: false,
  admins: [],
};

export let adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADMIN_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case ADD_ADMIN: {
      return {
        ...state,
        loading: false,
        admins: [...state.admins, payload],
      };
    }
    case REMOVE_ADMIN: {
      let filteredAdmin = state.admins.filter((el) => el.id !== payload);
      return {
        ...state,
        loading: false,
        admins: filteredAdmin,
      };
    }
    case ADMIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: payload || true,
      };
    }
    case ADMIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        admins: payload,
      };
    }

    default: {
      return state;
    }
  }
};
