import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Movies from './components/movies';
import Movie from './components/movie';
import { Route, Link, BrowserRouter } from 'react-router-dom'

const routs = (
  < BrowserRouter >
        <Route exact path="/" component={Movies} />
        <Route exact path="/movie" component={Movie} />
  </ BrowserRouter >
);

ReactDOM.render(
routs,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
