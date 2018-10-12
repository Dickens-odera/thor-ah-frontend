import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';


class ProtectedRoute extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    const { component: ProtectedComponent, isAuthenticated, ...rest } = this.props
    return (
      <Route
        {...rest}

        render={props => (
          isAuthenticated
            ? <ProtectedComponent {...props} />
            : (
              <Redirect to={{
                pathname: '/login',
                state: { from: props.location } // pass redirected location to redirected component
              }}
              />
            )
        )}
      />
    );
  }
}

const mapStateToProps = ({auth}) => {
  const { isAuthenticated } = auth;
  return {
    isAuthenticated,
  }
}
/*
  Set ProtectedRoute to be an impure component to allow rendering
  https: //stackoverflow.com/questions/43520498/react-router-private-routes-redirect-not-working
 */
export default connect(mapStateToProps, null, null, { pure: false })(ProtectedRoute);
