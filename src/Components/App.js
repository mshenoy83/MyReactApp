import React from "react";
import { MyAppBar, Footer } from "./Layouts";
import SignIn from "./Forms/SignIn";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";

class App extends React.Component {
  constructor() {
    super();
    this.openLogin = this.openLogin.bind(this);
    this.CloseLogin = this.CloseLogin.bind(this);
    this.Login = this.Login.bind(this);
    this.toggleBlocking = this.toggleBlocking.bind(this);
  }
  state = {
    open: false,
    email: "",
    password: "",
    blocking: false
  };
  toggleBlocking() {
    this.setState({ blocking: !this.state.blocking });
  }

  Login(model) {
    this.toggleBlocking();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: model.UserName,
        body: model.Password,
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.toggleBlocking();
        this.CloseLogin();
      });
  }

  openLogin() {
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
        <BlockUi tag="div" blocking={this.state.blocking}>
          <MyAppBar OpenDialog={this.openLogin} />
          <SignIn
            IsOpen={this.state.open}
            handleClose={this.CloseLogin}
            OnSubmit={this.Login}
            Email={this.state.email}
            Password={this.state.password}
          />
        </BlockUi>
      </React.Fragment>
    );
  }
}

export default App;
