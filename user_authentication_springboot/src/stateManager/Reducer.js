const initialState = {
  user: null,
  jwt: null,
  modalOpen: false,
  isLoading: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER_REQUEST":
    case "LOGIN_USER_REQUEST":
    case "GET_USER_PROFILE_REQUEST":
      return { ...state, isLoading: true, error: null };

    case "GET_USER_PROFILE_SUCCESS":
      return { ...state, isLoading: false, user: action.payload };

    case "AUTH_MODAL_OPEN":
      return { ...state, isLoading: false, modalOpen: true };

    case "AUTH_MODAL_CLOSE":
      return { ...state, isLoading: false, modalOpen: false };

    case "LOGIN_USER_SUCCESS":
      return { ...state, isLoading: false, jwt: action.payload.jwt };

    case "REGISTER_USER_FAILURE":
    case "LOGIN_USER_FAILURE":
    case "GET_USER_PROFILE_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        jwt: null,
        user: null,
      };

    default:
      return state;
  }
};
