import React from "react";
import ReactDOM from "react-dom";
import appStore from "./redux/reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./index.css";
import "./setupTests";

import App from "./App";
import EpisodeDetail from "./components/EpisodeDetail";
import Home from "./components/Home";

const store = createStore(appStore, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/:id/detail" component={EpisodeDetail} />
      </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);
