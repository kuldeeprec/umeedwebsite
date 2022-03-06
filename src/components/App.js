import React from "react";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";
import { authenticateUser } from "../actions/auth";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Home, Login, About, Studenterp } from "./";
const PrivateRoute = (privateRouteProps) => {
  const { isLoggedin, path, component: Component } = privateRouteProps;

  return (
    <Route
      path={path}
      render={(props) => {
        return isLoggedin ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
};

class App extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      const user = jwt_decode(token);

      console.log("user", user);
      this.props.dispatch(
        authenticateUser({
          userId: user.userId,
          _id: user._id,
          name: user.name,
        })
      );
    }
  }
  render() {
    const { auth } = this.props;
    console.log(auth);
    return (
      <div>
        <Router>
          <Switch>
            <Route
              exact={true}
              path="/"
              render={() => {
                return <Home auth={auth} />;
              }}
            />
            <Route exact={true} path="/login" component={Login} />
            <Route exact={true} path="/about" component={About} />
            <Route exact={true} path="/student-info" component={Studenterp} />
          </Switch>
        </Router>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    Navbar: state.Navbar,
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(App);
