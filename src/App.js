import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import "@coreui/icons/css/coreui-icons.min.css";
import "flag-icon-css/css/flag-icon.min.css";
import "font-awesome/css/font-awesome.min.css";
import "simple-line-icons/css/simple-line-icons.css";
import "./style.css";

import { DefaultLayout } from "./containers";

import { Login, Page404, Page500, Register } from "./views/Pages";

import { Provider } from "react-redux";
import store from "./store";

// import { renderRoutes } from 'react-router-config';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path="/login" name="Login Page" component={Login} />
            <Route
              exact
              path="/register"
              name="Register Page"
              component={Register}
            />
            <Route exact path="/404" name="Page 404" component={Page404} />
            <Route exact path="/500" name="Page 500" component={Page500} />
            <Route path="/" name="Home" component={DefaultLayout} />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
