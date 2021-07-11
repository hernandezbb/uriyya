import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { App } from './components/App';
import { configureStore } from './store/configureStore';

require("../css/photon.min.css");
require("../css/app.css");
require("../css/playlist.css");
require("../css/sidebar.css");
require("../css/header.css");

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

const store = configureStore();
function render() {

  ReactDOM.render(
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>,
    document.getElementById("root")
  );
}

render();
