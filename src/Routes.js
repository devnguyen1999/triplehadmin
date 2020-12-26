import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import Home from './pages/Home';
// import NotFound from "./pages/NotFound";
import Login from './pages/Login';
import Categories from './pages/Categories';
import Posts from './pages/Posts';
import CreateCategory from './pages/CreateCategory';
import CreatePost from './pages/CreatePost';
import EditCategory from './pages/EditCategory';
import EditPost from './pages/EditPost';
function Routes() {
  return (
    <Switch>
      <PrivateRoute exact path='/' component={Home} />
      {/* <PrivateRoute path="/loi-404" component={Error}> */}
      <Route path='/dang-nhap'>
        <Login />
      </Route>
      <PrivateRoute path='/the-loai/chinh-sua/:slug' component={EditCategory} />
      <PrivateRoute path='/bai-viet/chinh-sua/:slug' component={EditPost} />
      <PrivateRoute path='/the-loai' component={Categories} />
      <PrivateRoute path='/bai-viet' component={Posts} />
      <PrivateRoute path='/tao-the-loai' component={CreateCategory} />
      <PrivateRoute path='/tao-bai-viet' component={CreatePost} />
    </Switch>
  );
}

export default Routes;
