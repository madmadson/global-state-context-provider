

import React from "react"
import {useStateContext, useDispatchContext} from "./useContext";
import { List } from "react-virtualized"


const SwHwCompats = () => {
    const { swHwCompats } = useStateContext();
    const listOfSwHwCompats = Object.values(swHwCompats);
    const dispatch = useDispatchContext();

    const rowRenderer = ({ 
        key, 
        index, 
        style
       }) => {
        return (
            <div key={key}  style={style}>
              <div>{listOfSwHwCompats[index].name}</div>
            </div>
          );
      };

    return (
        <>
            <h4>SwHwCompats</h4>
            <List
        width={1024}
        height={800}
        rowCount={listOfSwHwCompats.length}
        rowHeight={20}
        rowRenderer={rowRenderer}
      />
        </>
    )
}

export {SwHwCompats};