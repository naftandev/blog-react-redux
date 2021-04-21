import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Users from '../pages/Users';
import ToDoList from '../pages/ToDoList';
import Posts from '../pages/Posts';
import NotFound from '../pages/NotFound';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/users' component={Users} />
        <Route exact path='/posts/:id' component={Posts} />
        <Route exact path='/todolist/:id' component={ToDoList} />
        <Route component={NotFound}></Route>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
