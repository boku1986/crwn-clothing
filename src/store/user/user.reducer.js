import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

//we need to give the state a default value (we dont have that hook anymore), so we set it to INITIAL_STATE
// now all of our reducers react to every single action that gets fired, so we need to make sure
// that we only update the state if the action.type matches the action type that we are looking for
export const userReducer = (state = INITIAL_STATE, action) => {
  // this is the reducer function, it takes in the current state and an action. Action has a type and a payload
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        // this way we just update the relevant part of the state
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SIGN_IN_FAILURE:
      return {
        ...state,
        error: payload,
      };
    default:
      // if the action.type does not match any of the cases, we just return the state, to show that nothing has changed
      return state;
  }
};
