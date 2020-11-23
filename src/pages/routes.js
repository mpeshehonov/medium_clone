import React from 'react';
import {Switch, Route} from 'react-router-dom';
import GlobalFeed from './GlobalFeed';
import Article from './Article';
import Auth from './Auth';

export default () => {
  return (
    <Switch>
      <Route path="/" component={GlobalFeed} exact />
      <Route path="/login" component={Auth} />
      <Route path="/register" component={Auth} />
      <Route path="/article/:slug" component={Article} />
    </Switch>
  );
}