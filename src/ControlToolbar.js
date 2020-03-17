import React from "react";
import { useDispatchContext } from "./useGlobalContext";

import { GenerateTestdataAction } from "./GlobalStateProvider";

import {
  messageService,
  GenerateFlashwareMessage,
  FooMessage,
  CleanupMessage
} from "./messageBus";

export const ControlToolbar = () => {
  const dispatch = useDispatchContext();

  return (
    <>
      <button onClick={() => dispatch({ type: GenerateTestdataAction })}>
        GenerateTestData - GLOBAL ACTION
      </button>
      <button onClick={() => messageService.sendMessage({ type: FooMessage })}>
        FOO - MESSAGE
      </button>
      <button onClick={() => messageService.sendMessage({ type: CleanupMessage })}>
        CLEANUP - MESSAGE
      </button>
      <button
        onClick={() =>
          messageService.sendMessage({ type: GenerateFlashwareMessage })
        }
      >
        GenerateFlashwareData - MESSAGE
      </button>
    </>
  );
};
