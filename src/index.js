import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CardDetail from "./components/CardDetail/CardDetail";
import NotFound from "./components/Loading/NotFound";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/robot/:id" component={CardDetail}></Route>
        <Route path="/*" component={NotFound}></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
