import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';
import store from './redux/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App className="container border-8" />
    </Provider>
  </React.StrictMode>,
);

ReactGA.initialize('UA-235638220-1');
ReactGA.pageview(window.location.pathname + window.location.search);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
