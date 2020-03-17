import produce from "immer";
import React, { useReducer, createContext, useContext } from "react";
import { generateFlashwareData } from "../testData";
import { IFlashwareViewModel } from "./flashwareModel";

export interface IFlaswareState {
  flashwaresVisible: boolean;
  flashwares: {
    [flashwareId: string]: IFlashwareViewModel;
  };
}
interface IAddFlashwareAction {
  type: typeof AddFlashwareAction;
  payload: IFlashwareViewModel;
}

interface IGenerateFlashwareAction {
  type: typeof GenerateFlashwaresAction;
}

interface ICleanupAction {
  type: typeof CleanupAction;
}

interface ICreateAction {
  type: typeof CreateAction;
}

export const AddFlashwareAction = "ADD_FLASHWARE";
export const GenerateFlashwaresAction = "GENERATE_FLASHWARES";
export const CleanupAction = "CLEANUP";
export const CreateAction = "CREATE";
export type FlashwareActions =
  | IAddFlashwareAction
  | IGenerateFlashwareAction
  | ICreateAction
  | ICleanupAction;

const reducer = (
  state: IFlaswareState,
  action: FlashwareActions
): IFlaswareState =>
  produce(state, draft => {
    console.log(`receive action ${action.type}`)
    switch (action.type) {
      case AddFlashwareAction: {
        draft.flashwares[action.payload.id] = action.payload;
        break;
      }
      case GenerateFlashwaresAction: {
        generateFlashwareData(draft, 10000);
        break;
      }
      case CleanupAction: {
        draft.flashwares = {}
        draft.flashwaresVisible = false
        break;
      }
      case CreateAction: {
        draft.flashwares = {}
        draft.flashwaresVisible = true
        break;
      }
    }
  });

const stateContext = createContext({});
const dispatchContext = createContext({});

const FlashwareStateProvider = (
  reactNodesInside: React.PropsWithChildren<{}>
) => {
  const initialState: IFlaswareState = {
    flashwaresVisible: true,
    flashwares: {}
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <stateContext.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>
        {reactNodesInside.children}
      </dispatchContext.Provider>
    </stateContext.Provider>
  );
};

const useFlashwareStateContext = () => {
  const state = useContext(stateContext);

  if (state === undefined) {
    throw new Error("Ut oh, where is my dispatch?");
  }

  return state;
};

const useFlashwareDispatchContext = () => {
  const dispatch = useContext(dispatchContext);

  if (dispatch === undefined) {
    throw new Error("Ut oh, where is my dispatch?");
  }

  return dispatch;
};

export {
  FlashwareStateProvider,
  useFlashwareStateContext,
  useFlashwareDispatchContext
};
