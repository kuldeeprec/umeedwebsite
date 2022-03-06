import React, { Component } from "react";
import { NavBar, Noticebar, Slider, Footer } from "./";
class Home extends Component {
  render() {
    const { auth } = this.props;
    console.log(auth.user.userId);
    return (
      <>
        <NavBar />
        <Slider />
        <Noticebar />
        <Footer auth={auth} />
      </>
    );
  }
}

export default Home;
