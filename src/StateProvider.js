import produce from 'immer';
import React, { useReducer } from 'react';
import {generateTestData} from './testData'


const DispatchContext = React.createContext();
const StateContext = React.createContext();

const ACTION_TYPES = {
    loadFlashwares: "LOAD_FLASHWARES",
   
};


const reducer = (state, action) =>
    produce(state, draft => {
        switch (action.type) {

            case ACTION_TYPES.loadFlashwares: {
                const { flashwares } = action.payload;
                draft.flashwares = flashwares;
                return draft;
            }

            default: {
                throw new Error(`Unhandled action type: ${action.type}`);
            }
        }
    });


const StateProvider = ({ children }) => {
    
    const moarState = generateTestData({}, 20000);
    
    const initState = {
        ...moarState
    };
    console.log(JSON.stringify(initState))

    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
};

export { StateProvider, DispatchContext, StateContext, ACTION_TYPES};