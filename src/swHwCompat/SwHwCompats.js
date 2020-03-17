import React from "react";
import { useStateContext, useDispatchContext } from "../useGlobalContext";
import { List } from "react-virtualized";
import { YoloAction, YoloTwoAction } from "../GlobalStateProvider";

const SwHwCompats = () => {
  const { swHwCompats, stateForSwHwCompats } = useStateContext();
  const listOfSwHwCompats = swHwCompats && Object.values(swHwCompats);
  const dispatch = useDispatchContext();

  console.log("render swHwCompat");

  const rowRenderer = ({ key, index, style }) => {
    return (
      <div key={key} style={style}>
        <div>{listOfSwHwCompats[index].name}</div>
      </div>
    );
  };

  return (
    <>
      <h4>SwHwCompats ({swHwCompats ? listOfSwHwCompats.length : "none"})</h4>
      {stateForSwHwCompats && <div>STATE IS TRIGGERT!</div>}
      <button onClick={() => dispatch({ type: YoloAction })}>DISPATCH_GLOBAL_NO_STATE_CHANGE</button>
      <button onClick={() => dispatch({ type: YoloTwoAction })}>DISPATCH_GLOBAL_STATE_CHANGE</button>
      {swHwCompats ?(
        <List
          width={1024}
          height={300}
          rowCount={listOfSwHwCompats.length}
          rowHeight={20}
          rowRenderer={rowRenderer}
        />
      ) : <div>Nothing!</div>}
    </>
  );
};

export { SwHwCompats };
