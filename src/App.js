import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { ProductPage, RecentListPage, ErrorPage } from "pages";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path={["/", "/product", "/product/:id"]}
          component={ProductPage}
        />
        <Route exact path="/recentList" component={RecentListPage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    );
  }
}

export default App;
