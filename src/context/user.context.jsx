import {createContext, useEffect, useReducer} from "react";
import {createUserDocumentFromAuth, onAuthStateChangedListener,} from "../utils/firebase/firebase.utils";

// as actual value we want to access the user object
export const UserContext = createContext({
  currentUser: () => null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state, action) => {
  console.log(action)
  // this is the reducer function, it takes in the current state and an action. Action has a type and a payload
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        // this way we just update the relevant part of the state
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type: ${type} - in  UserReducer`);
  }
};

export const UserProvider = ({ children }) => {
  // destructure the state => { currentUser } and dispatch (is a function call) from the reducer
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  console.log("currentUser", currentUser)
  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
