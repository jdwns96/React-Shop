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
import GlobalStyle from "@assets/styles/global";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        {console.log("made by GLE")}
        <Switch>
          {router.map((elem, i) => (
            <Route exact={elem.exact} path={elem.path} component={elem.component} key={elem.id} />
          ))}
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

reportWebVitals();
