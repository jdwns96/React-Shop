// React
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

// React-router-dom
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "@modules";

// router
import router from "@pages/router";

// emtion

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {router.map((elem, i) => (
            <Route exact={elem.exact} path={elem.path} component={elem.component} />
          ))}
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

reportWebVitals();
