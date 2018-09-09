import React from "react";
import { MyAppBar, Footer } from "./Layouts";
import SignIn from "./Dialogs/SignIn";
import Register from "./Forms/Register";
import { addValidationRule } from "formsy-react";

addValidationRule("IsOlderThan18", function(values, value) {
  var isvalueEmpty =
    !value || value === undefined || value === "" || value.length === 0;
  if (isvalueEmpty) return true;
  var today = new Date();
  var birthDate = new Date(value);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age >= 18;
});

addValidationRule("IsValidPhoneNumber", function(values, value) {
  var phoneExpression = /^[-\s+(]*(6[-\s]*1|0)?[-\s)]*([-\s(]*4[-\s)]*([\d][-\s]*){8})$/;
  var isvalueEmpty =
    !value || value === undefined || value === "" || value.length === 0;
  if (isvalueEmpty) return true;
  return value.match(phoneExpression);
});

addValidationRule("IsRequired", function(values, value) {
  var isvalueEmpty =
    !value || value === undefined || value === "" || value.length === 0;
  if (isvalueEmpty) return false;
  return true;
});

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
