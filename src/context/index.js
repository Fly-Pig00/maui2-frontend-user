import React, { createContext, useContext, useReducer } from 'react';
import reducer, { initialState } from './reducers';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  /*
    Add here your middleware logic....
  */
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}> {/* useReducer returns the state and a dispatch function to update state */}
      {children}
    </StateContext.Provider>
  )
};

export const useStateFromContext = () => useContext(StateContext);