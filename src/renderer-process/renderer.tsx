import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";

require("../css/photon.min.css");
require("../css/app.css");
require("../css/playlist.css");

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

ReactDOM.render(<App />, document.getElementById("main"));
