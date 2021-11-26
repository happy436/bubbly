import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {addPost} from "./data/data"

/* debugger */

export let reRender = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App 
          state={state} 
          addPost={addPost}
          />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}