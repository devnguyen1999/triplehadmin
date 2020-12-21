import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';
import Home from "./pages/Home";
// import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
function Routes() {
  return (
      <Switch>
        {/* <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute> */}
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/loi-404">
          <Home />
        </PrivateRoute>
        <Route path="/dang-nhap">
          <Login />
        </Route>
        <PrivateRoute path="/tao-bai-viet">
          <CreatePost />
        </PrivateRoute>
      </Switch>
  );
}

export default Routes;
