import { useContext } from 'react';
import { stateContext, dispatchContext } from './GlobalStateProvider';

const useStateContext = () => {
    const state = useContext(stateContext);
  
    if (state === undefined) {
      throw new Error("Ut oh, where is my dispatch?");
    }
  
    return state;
  };

const useDispatchContext = () => {
    const dispatch = useContext(dispatchContext);
  
    if (dispatch === undefined) {
      throw new Error("Ut oh, where is my dispatch?");
    }
  
    return dispatch;
  };

export { useStateContext, useDispatchContext };