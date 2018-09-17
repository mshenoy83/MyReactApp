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
import { Login, ForgotPassword } from "../Forms";
import SignInFooter from "../Layouts/SignInFooter";
import TextData from "../Data/stringresources";

class SignIn extends React.Component {
  state = {
    showLogin: true,
    showRegistration: false,
    showForgotPassword: false,
    FooterLabelText: TextData.SignUpFooterLabel,
    FooterButtonText: TextData.SignUpButtonLabel
  };

  ForgotPasswordClick = () => {
    this.setState({
      showLogin: false,
      showRegistration: false,
      showForgotPassword: true
    });
  };

  BacktoLogin = () => {
    this.setState({
      showLogin: true,
      showRegistration: false,
      showForgotPassword: false
    });
  };

  CloseDialog = () => {
    this.setState({
      showLogin: true,
      showRegistration: false,
      showForgotPassword: false,
      FooterLabelText: TextData.SignUpFooterLabel,
      FooterButtonText: TextData.SignUpButtonLabel
    });
    this.props.handleClose();
  };

  render = () => {
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
                  <Button
                    color="primary"
                    className={this.props.classes.button}
                    onClick={this.ForgotPasswordClick}
                  >
                    Forgot Password?
                  </Button>
                </React.Fragment>
              ) : null}
              {this.state.showForgotPassword ? (
                <ForgotPassword BacktoLogin={this.BacktoLogin} />
              ) : null}
            </main>
          </DialogContent>
          {!this.state.showForgotPassword ? (
            <SignInFooter
              FooterLabel={this.state.FooterLabelText}
              FooterButtonText={this.state.FooterButtonText}
              OnButtonClick={this.props.FooterButtonClick}
            />
          ) : null}
        </Dialog>
      </React.Fragment>
    );
  };
}

export default withStyles(basestyles)(SignIn);
