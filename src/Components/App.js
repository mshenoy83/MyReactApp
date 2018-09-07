import React from "react";
import { MyAppBar, Footer } from "./Layouts";
import SignIn from "./Dialogs/SignIn";

class App extends React.Component {
  constructor() {
    super();
    this.openLogin = this.openLogin.bind(this);
    this.CloseLogin = this.CloseLogin.bind(this);
    this.Login = this.Login.bind(this);
  }
  state = {
    open: false,
    email: "",
    password: "",
    blocking: false
  };

  Login(model) {
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
        <MyAppBar OpenDialog={this.openLogin} />
        <SignIn
          IsOpen={this.state.open}
          handleClose={this.CloseLogin}
          OnSubmit={this.Login}
          Email={this.state.email}
          Password={this.state.password}
        />
      </React.Fragment>
    );
  }
}

export default App;
