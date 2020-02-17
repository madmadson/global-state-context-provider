import { useContext } from 'react';
import { StateContext, DispatchContext } from './StateProvider';

const useStateContext = () => {
    const state = useContext(StateContext);
  
    if (state === undefined) {
      throw new Error("Ut oh, where is my dispatch?");
    }
  
    return state;
  };

const useDispatchContext = () => {
    const dispatch = useContext(DispatchContext);
  
    if (dispatch === undefined) {
      throw new Error("Ut oh, where is my dispatch?");
    }
  
    return dispatch;
  };

export { useStateContext, useDispatchContext };