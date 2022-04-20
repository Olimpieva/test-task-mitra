import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

import store from './redux';
import App from './components/App/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
