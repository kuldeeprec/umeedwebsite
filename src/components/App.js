import React from "react";
import { connect } from "react-redux";
import { fetchposts } from "../actions/posts";
import { NavBar } from "./";
import Slider from "./Slider/Slider";
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchposts());
  }
  render() {
    return (
      <div>
        <NavBar />
        <Slider />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    Navbar: state.Navbar,
  };
}
export default connect(mapStateToProps)(App);
