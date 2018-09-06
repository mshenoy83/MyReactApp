import React from "react";
import { MyAppBar, Footer } from "./Layouts";
import SignIn from "./Forms/SignIn";

class App extends React.Component {
  constructor() {
    super();
    this.handleLogin = this.handleLogin.bind(this);
    this.CloseLogin = this.CloseLogin.bind(this);
  }
  state = {
    open: false,
    email: "",
    password: ""
  };
  handleLogin() {
    if (!this.state.open) {
      this.setState({ open: true });
    }
  }

  CloseLogin() {
    this.setState({ open: false });
  }
  render() {
    return (
      <React.Fragment>
        <MyAppBar OpenDialog={this.handleLogin} />
        <SignIn IsOpen={this.state.open} handleClose={this.CloseLogin} />
        <div>Hello from React</div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
