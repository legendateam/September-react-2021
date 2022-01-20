import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {BrowserRouter} from "react-router-dom";

export * from "./components/pages/lefstsidebar/Users/Users";
export * from "./components/pages/lefstsidebar/Posts/Posts";
export * from "./components/pages/rightsidebar/UserDetails/UserDetails";
export * from "./components/pages/rightsidebar/PostDetail/PostDetails";
export * from "./components/pages/Wrap/Wrap";
export * from "./components/pages/rightsidebar/UserPosts/UserPosts";
export * from "./components/pages/rightsidebar/Comments/Comments";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <App/>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

