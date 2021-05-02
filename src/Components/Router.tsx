import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Detail from './Detail';
import Header from './Header';
import Main from './Main';
import Register from './Register';
import User from './User';

const Router: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/user/:id" exact component={User} />
      <Route path="/detail" exact component={Detail} />
      <Route path="/register" exact component={Register} />
    </Switch>
  </BrowserRouter>
);

export default Router;
