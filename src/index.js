import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { GlobalStateProvider } from "./GlobalStateProvider";
import { FlashwareContainer } from "./flashware/FlashwareContainer";
import { SwHwCompats } from "./swHwCompat/SwHwCompats";
import { ControlToolbar } from "./ControlToolbar";
import { FlashwareStateProvider } from "./flashware/FlashwareStateProvider";

ReactDOM.render(
  <GlobalStateProvider>
    <ControlToolbar />
    <SwHwCompats />

    <FlashwareStateProvider>
      <FlashwareContainer />
    </FlashwareStateProvider>
  </GlobalStateProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
