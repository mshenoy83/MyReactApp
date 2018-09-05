import React, { Component } from "react";
import { FlutterAppBar, Footer } from "./Layouts";
import SignIn from "./Forms/SignIn";

class App extends React.Component {
  constructor() {
    super();
    this.handleLogin = this.handleLogin.bind(this);
  }
  state = {
    open: false
  };
  handleLogin() {
    console.log(this.state.open);
    if (!this.state.open) {
      this.setState({ open: true });
    }
    console.log(this.state.open);
  }
  render() {
    return (
      <React.Fragment>
        <FlutterAppBar OpenDialog={this.handleLogin} />
        <SignIn IsOpen={this.state.open} />
        <div>Hello from React</div>;
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
