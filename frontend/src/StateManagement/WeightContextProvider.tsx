import React, { createContext, useContext, useReducer } from 'react';

// Define the type for the state managed by the reducer
interface WeightState {
    weight: number;
}

// Define the action types
type Action =
    | { type: 'SET_WEIGHT'; payload: number };

// Define the initial state
const initialState: WeightState = {
    weight: 0,
};

// Define the reducer function
const weightReducer = (state: WeightState, action: Action): WeightState => {
    switch (action.type) {
        case 'SET_WEIGHT':
            return {
                ...state,
                weight: action.payload,
            };
        default:
            return state;
    }
};

// Create the context
const WeightContext = createContext<{ state: WeightState; dispatch: React.Dispatch<Action> }>({
    state: initialState,
    dispatch: () => {}
});

// Custom hook for accessing the context
const useWeightContext = () => useContext(WeightContext);

// WeightProvider component to wrap your app and provide the context
const WeightProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(weightReducer, initialState);

    return (
        <WeightContext.Provider value={{ state, dispatch }}>
            {children}
        </WeightContext.Provider>
    );
};

export { WeightProvider, useWeightContext };
