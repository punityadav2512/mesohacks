import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore , compose , applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {reducers} from "./reducers/index"


const store = createStore(reducers , compose(applyMiddleware(thunk)))



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <Provider store= {store}>
  <React.StrictMode>
  <App />
  </React.StrictMode>
  </Provider>
);
