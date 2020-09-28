import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NewsDashboard from './HackerNewsElements';
import NewsItemDetail from './HackerNewsElements/NewsItemDetail';

const AppRouter = () => (
  <main className="main-content container">
    <div className="col-mid col-mid--dashboard">
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/news-feed" />} />
        <Route path="/news-feed/:id" component={NewsItemDetail} />
        <Route path="/news-feed" component={NewsDashboard} />
      </Switch>
    </div>
  </main>
);

export default AppRouter;
