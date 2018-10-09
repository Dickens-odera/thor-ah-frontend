import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Fragment } from 'react'
// components
import ProfilePage from './containers/ProfilePage';
import ArticlePage from './containers/ArticlePage';
import Homepage from './containers/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProtectedRoute from './containers/ProtectedRoute';
import Signin from './containers/SignIn/SignIn';
import NavBar from './components/NavBar';
import TextEditor from './containers/CreateArticle/TextEditor';

const Login = () => (
  <div><h1>Login page</h1></div>
);

const Sample = () => (
  <div className="landing-page">
    <h1>This is just a sample page for routes</h1>
  </div>
)

const AppRoutes = () => (
  <Router>
    <Fragment>
      <Header />
      <Route exact path='/' component={Homepage} />
      {/* protected routes can be rendered using the ProtectedRoutes component */}
      <ProtectedRoute path='/article' component={ArticlePage} />
      <ProtectedRoute path='/profile/user' component={ProfilePage} />
      <Route exact path='/signin' component={Signin} />
      <ProtectedRoute path='/article' component={ ArticlePage }/>
      <ProtectedRoute path='/profile/user' component={ ProfilePage }/>
      <NavBar />
      <Route exact path='/' component={ Homepage }/>
      <Route exact path='/sample' component={ Sample }/>
      <Route exact path='/create-article' component={ TextEditor }/>
      <Footer />
    </Fragment>
  </Router>
);

export default AppRoutes;
