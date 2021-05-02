import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'
import All from './Resource/Reducers'
import './index.css'
//import './BootStrap/bootstrap.min.css'
import App from './App'

const store = createStore(All, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Router>
      <Provider store={store}>
        <App />
      </Provider>
  </Router>,
  document.getElementById('root')
);

// ├── README.md
// ├── node_modules
// ├── package.json
// ├── .gitignore
// ├── build
// ├── public
// │   ├── favicon.ico
// │   ├── index.html
// │   └── manifest.json
// └── src
//     ├── App.css
//     ├── App.js
//     ├── App.test.js
//     ├── index.css
//     ├── index.js
//     ├── logo.svg
//     └── serviceWorker.js


