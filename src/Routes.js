import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Home from "./pages/Home";
// import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
function Routes() {
  return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/loi-404">
          <Home />
        </Route>
        <Route path="/dang-nhap">
          <Login />
        </Route>
        <Route path="/tao-bai-viet">
          <CreatePost />
        </Route>
      </Switch>
  );
}

export default Routes;
