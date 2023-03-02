import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './fonts/BoyzRGrossShadowNF.ttf';
import './fonts/ChanticleerRomanNF-Bold.ttf';
import './fonts/ChanticleerRomanNF.ttf';

import store from './redux/store';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/react-test-app/">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// basename = '/react-test-app/';
