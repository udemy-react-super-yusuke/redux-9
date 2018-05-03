import React from "react";
import { render } from "react-dom";

import { createStore } from "redux";

// まとめ上げた reducer を import する
// 名前が変わっているので注意
import rootReducer from "./reducers";

import { Provider } from "react-redux";

import App from "./containers/App";

// 名前を変更しています
const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
