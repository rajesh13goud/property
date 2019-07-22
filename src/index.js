import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// impo rt App from './App';
import Server from "./Server";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
// import App from './App';
// import Menu from './components/Menu/menu';

ReactDOM.render(<Server />, document.getElementById("root"));
// ReactDOM.render(<Menu />, document.getElementById(''));
if (module.hot) {
  module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
