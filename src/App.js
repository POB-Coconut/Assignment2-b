import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import RecentListPage from "./pages/RecentListPage";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={["/", "/product"]} component={ProductPage} />
        <Route exact path="/recentList" component={RecentListPage} />
      </Switch>
    );
  }
}

export default App;
