import React from "react";
import { useStateContext } from "./useContext";
import { List } from "react-virtualized";

const Flashwares = () => {
  const { flashwares } = useStateContext();
  const listOfFlashwares = Object.values(flashwares);

  const rowRenderer = ({ 
    key, 
    index, 
    style
   }) => {
    return (
        <div key={key} style={style}>
          <div>{listOfFlashwares[index].name}</div>
        </div>
      );
  };

  return (
    <>
      <h4>Flashwares</h4>
      <List
        width={1024}
        height={800}
        rowCount={listOfFlashwares.length}
        rowHeight={20}
        rowRenderer={rowRenderer}
      />
    </>
  );
};

export { Flashwares };
