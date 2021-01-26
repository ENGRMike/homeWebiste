import React from "react";
import ReactDOM from "react-dom";
import CssBaseLine from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import App from "./Components/App/App";

import { Provider } from "react-redux";
import store from "./redux";

import reportWebVitals from "./reportWebVitals";

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseLine />
        <App />
      </ThemeProvider>
    </Provider>,
    document.querySelector("#root")
  );
}

render();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./Components/App/App", render);
}
