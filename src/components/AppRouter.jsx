import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import NewsDashboard from './HackerNewsElements';
import NewsItemDetail from './HackerNewsElements/NewsItemDetail';

const AppRouter = () => (
  <main className="main-content container">
    <div className="col-mid col-mid--dashboard">
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/news-feed?page=1" />} />
        <Route exact path="/news-feed/:id" component={NewsItemDetail} />
        <Route exact path="/news-feed" component={NewsDashboard} />
      </Switch>
    </div>
  </main>
);

export default AppRouter;
