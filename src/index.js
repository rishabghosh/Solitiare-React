import React from 'react';
import ReactDOM from 'react-dom';
import './main/styles/index.css';
import AppView from './main/components/AppView';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppView />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
