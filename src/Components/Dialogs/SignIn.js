import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Dialog,
  DialogContent,
  IconButton,
  CssBaseline,
  Button
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { basestyles } from "../Styles/base";
import { Login, Register, ForgotPassword } from "../Forms";
import SignInFooter from "../Layouts/SignInFooter";

const TextData = {
  SignUpFooterLabel: "Don't have an account?",
  RegisterFooterLabel: "Already have an account?",
  SignUpButtonLabel: "Sign up",
  LoginButtonLabel: "Log in"
};

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.setState({
      open: this.props.IsOpen
    });
    this.FooterButtonClick = this.FooterButtonClick.bind(this);
    this.CloseDialog = this.CloseDialog.bind(this);
  }
  state = {
    open: false,
    showLogin: true,
    showRegistration: false,
    showForgotPassword: false,
    FooterLabelText: TextData.SignUpFooterLabel,
    FooterButtonText: TextData.SignUpButtonLabel
  };

  FooterButtonClick() {
    if (this.state.showLogin) {
      this.setState({
        showLogin: false,
        showRegistration: true,
        FooterLabelText: TextData.RegisterFooterLabel,
        FooterButtonText: TextData.LoginButtonLabel
      });
      return;
    }
    if (this.state.showRegistration) {
      this.setState({
        showLogin: true,
        showRegistration: false,
        FooterLabelText: TextData.SignUpFooterLabel,
        FooterButtonText: TextData.SignUpButtonLabel
      });
      return;
    }
  }

  CloseDialog() {
    this.setState({
      open: false,
      showLogin: true,
      showRegistration: false,
      showForgotPassword: false,
      FooterLabelText: TextData.SignUpFooterLabel,
      FooterButtonText: TextData.SignUpButtonLabel
    });
    this.props.handleClose();
  }

  render() {
    return (
      <React.Fragment>
        <Dialog
          open={this.props.IsOpen}
          className={this.props.classes.signInDialog}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <div className={this.props.classes.iconWrapper}>
              <IconButton
                color="primary"
                onClick={this.CloseDialog}
                aria-label="Close"
                className={this.props.classes.iconbutton}
              >
                <CloseIcon color="primary" />
              </IconButton>
            </div>
            <main className={this.props.classes.paper}>
              <CssBaseline />
              {this.state.showLogin ? (
                <React.Fragment>
                  <Login OnSubmit={this.props.OnSubmit} />
                  <Button color="primary" className={this.props.classes.button}>
                    Forgot Password?
                  </Button>
                </React.Fragment>
              ) : null}
              {this.state.showRegistration ? <Register /> : null}
            </main>
          </DialogContent>
          {!this.state.showForgotPassword ? (
            <SignInFooter
              FooterLabel={this.state.FooterLabelText}
              FooterButtonText={this.state.FooterButtonText}
              OnButtonClick={this.FooterButtonClick}
            />
          ) : null}
        </Dialog>
      </React.Fragment>
    );
  }
}

export default withStyles(basestyles)(SignIn);
