import React, {useEffect} from "react";
import { List } from "react-virtualized";
import { useFlashwareStateContext, useFlashwareDispatchContext, GenerateFlashwaresAction, CleanupAction } from "./FlashwareStateProvider";
import { messageService, FooMessage, GenerateFlashwareMessage, CleanupMessage } from "../messageBus";

const Flashwares = () => {
  const { flashwares } = useFlashwareStateContext();
  const dispatch  = useFlashwareDispatchContext();
  const listOfFlashwares = flashwares && Object.values(flashwares);

  console.log('render flashware')

  useEffect(() => {
    console.log(`subscribe to message service flashware`)
    const subscription = messageService.getMessage().subscribe(message => {
    
      switch (message.type) {
        case GenerateFlashwareMessage: {
          console.log(`received message: ${message.payload}`)
          dispatch({type: GenerateFlashwaresAction})
          break;
        }
        case FooMessage: {
          console.log(`received message: ${message.payload}`)
          break;
        }
        case CleanupMessage: {
         
          dispatch({type: CleanupAction})
          break;
        }
        default: {
          console.log(`received ignored message`)
        }
      }
    });
  
    return () => {
      console.log(`unsubscribe flashware`)
      subscription.unsubscribe();
    };
  });

  const rowRenderer = ({ 
    key, 
    index, 
    style
   }) => {
    return (
        <div key={key} style={style}>
          <div>{listOfFlashwares[index].name}</div>
          <div>{listOfFlashwares[index].amountOfSWHwCompats}</div>
        </div>
      );
  };

  return (
    <>
      <h4>Flashwares ({flashwares ? listOfFlashwares.length : 'none'})</h4>
      {flashwares ? <List
        width={1024}
        height={300}
        rowCount={listOfFlashwares.length}
        rowHeight={20}
        rowRenderer={rowRenderer}
      />
      : <div>Nothing</div>}
    </>
  );
};

export { Flashwares };
