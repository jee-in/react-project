import React, { StrictMode } from 'react'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// redux 관련
import store from "./redux/config/configStore.jsx";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
