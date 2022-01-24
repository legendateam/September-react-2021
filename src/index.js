import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {BrowserRouter} from "react-router-dom";

export * from "./components/Wrap/Wrap";
export * from './components/pages/page1/Episodes/Episodes';
export * from './components/pages/page1/EpisodeDetails/EpisodeDetails'

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

