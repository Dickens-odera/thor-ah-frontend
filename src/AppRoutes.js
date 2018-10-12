import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Fragment } from 'react'
// components
import ProfilePage from './containers/ProfilePage';
import ArticlePage from './containers/ArticlePage';
import Homepage from './containers/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProtectedRoute from './containers/ProtectedRoute';
import Signin from './containers/SignIn/SignIn';
import NotFound from './containers/NotFound/NotFound';

const AppRoutes = () => (
  <Router>
    <Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        {/* protected routes can be rendered using the ProtectedRoutes component */}
        <ProtectedRoute path='/article' component={ArticlePage} />
        <ProtectedRoute path='/profile/user' component={ProfilePage} />
        <Route exact path='/signin' component={Signin} />

        {/* will alsways render when no other path is matched */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Fragment>
  </Router>
);

export default AppRoutes;
