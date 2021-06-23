import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router-dom';

import Home from './views/home/Home';
import Error from './views/error/Error';

export const history = createBrowserHistory();

/* eslint-disable react/jsx-boolean-value */
const AppRouter = () => (
  <Router history={history}>
    <>
      <main id="main">
        <Switch>
          <Route component={Home} exact={true} path="/home" />
          <Route component={Error} exact={true} path="/error" />
        </Switch>
      </main>
    </>
  </Router>
);

export default AppRouter;
