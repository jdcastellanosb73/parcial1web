import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import './i18n';
import { IntlProvider } from 'react-intl';
import lenguajeEs from "./lenguajes/es";
import lenguajeEn from "./lenguajes/en";

function detectUserLanguage() {
  const userLang = navigator.language || navigator.userLanguage;
  
  return userLang.split('-')[0];
}


const idiomaNavegador = detectUserLanguage();


const idiomaLocal = {
  "es": lenguajeEs,
  "en": lenguajeEn,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IntlProvider locale={idiomaNavegador} messages= {idiomaLocal[idiomaNavegador]}>
    <App />
    </IntlProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
