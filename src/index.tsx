import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";
import {GlobalSyled} from "./styles/Global.syled";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>

    <GlobalSyled/>
<App />
    </React.StrictMode>
);

reportWebVitals();
