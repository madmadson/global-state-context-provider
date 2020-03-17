import produce from "immer";
import React, { useReducer, createContext } from "react";
import { generateTestData } from "./testData";

export interface IGlobalAppState {
  flashwares: {};
  swHwCompats: {};
  stateForSwHwCompats: boolean;
  stateForFlashwares: boolean;
}
interface IGenerateTestdataActionAction {
  type: typeof GenerateTestdataAction;
  payload: any;
}
interface IYoloAction {
  type: typeof YoloAction;
  payload: any;
}
interface IYoloTwoAction {
  type: typeof YoloTwoAction;
  payload: any;
}

export const GenerateTestdataAction = "GENERATE_TESTDATA";
export const YoloAction = "YOLO";
export const YoloTwoAction = "YOLO_TWO";
export type GlobalAppAction = IGenerateTestdataActionAction | IYoloAction | IYoloTwoAction;

const initialState: IGlobalAppState = {
flashwares: {},
stateForFlashwares: false,
stateForSwHwCompats: false,
swHwCompats: {}
}

const reducer = (state: IGlobalAppState, action: GlobalAppAction) =>
  produce(state, draft => {
    switch (action.type) {
      case GenerateTestdataAction: {
        const newState = generateTestData(
          initialState,
          Math.floor(Math.random() * 100000) + 100000
        );
        return { ...newState };
      }
      case YoloAction: {
        console.log('hi from global state')
        return draft
      }
      case YoloTwoAction: {
        console.log('hi from global state, again')
        draft.stateForSwHwCompats = !state.stateForSwHwCompats
        return draft
      }
    }
  });
const stateContext = createContext({});
const dispatchContext = createContext({});

const GlobalStateProvider = (reactNodesInside: React.PropsWithChildren<{}>) => {
 
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <stateContext.Provider value={ state }>
      <dispatchContext.Provider value={ dispatch }>
        {reactNodesInside.children}
      </dispatchContext.Provider>
    </stateContext.Provider>
  );
};

export { GlobalStateProvider, dispatchContext, stateContext };
