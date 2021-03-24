import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Users from '../pages/Users';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/users' component={Users} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
