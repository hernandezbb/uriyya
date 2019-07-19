import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
import { configureStore } from "./store/configureStore";
import { Provider as ReduxProvider } from "react-redux";

require("../css/photon.min.css");
require("../css/app.css");
require("../css/playlist.css");

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

const store = configureStore();

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById("main")
);
