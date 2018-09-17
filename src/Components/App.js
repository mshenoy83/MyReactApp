import React from "react";
import { MyAppBar, Footer } from "./Layouts";
import SignIn from "./Dialogs/SignIn";
import Register from "./Forms/Register";
import * as validationRules from "./ValidationRules/BaseRules";

class App extends React.Component {
  state = {
    open: false,
    email: "",
    password: "",
    blocking: false,
    showRegistration: false
  };

  Login = model => {
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
  };

  openLogin = () => {
    this.setState({ showRegistration: false });
    if (!this.state.open) {
      this.setState({ open: true });
    }
  };

  FooterButtonClick = () => {
    this.CloseLogin();
    this.setState({ showRegistration: true });
  };

  CloseLogin = () => {
    this.setState({ open: false });
  };
  render = () => {
    return (
      <React.Fragment>
        <MyAppBar OpenDialog={this.openLogin} />
        <SignIn
          IsOpen={this.state.open}
          handleClose={this.CloseLogin}
          OnSubmit={this.Login}
          Email={this.state.email}
          Password={this.state.password}
          FooterButtonClick={this.FooterButtonClick}
        />
        {this.state.showRegistration ? <Register /> : null}
      </React.Fragment>
    );
  };
}

export default App;
