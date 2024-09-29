import React, { createContext, useContext, useReducer } from 'react';

// Preeparing the data layer
export const StateContext = createContext();

// Create a provider component
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Hook to use the state in any component
export const useStateValue = () => useContext(StateContext);
