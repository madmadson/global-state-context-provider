import React from "react";
import { Flashwares } from "./Flashwares";
import { useFlashwareStateContext, useFlashwareDispatchContext, CleanupAction, CreateAction } from "./FlashwareStateProvider";
import { useStateContext } from "../useGlobalContext";

export const FlashwareContainer = () => {
  const { flashwaresVisible } = useFlashwareStateContext();
  const { stateForFlashwares } = useStateContext();
  const dispatch = useFlashwareDispatchContext();

  console.log("render FlashwareContainer");

  return (
    <>
     {stateForFlashwares && <div>STATE FOR FLASHWARES IS TRIGGERT!</div>}
      <button
        onClick={() => {
            flashwaresVisible ? dispatch({type: CleanupAction}) : dispatch({type: CreateAction})
        }}
      >
        TOGGLE_VISIBLE
      </button>
      {flashwaresVisible && <Flashwares />}
    </>
  );
};
