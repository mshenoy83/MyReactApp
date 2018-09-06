import React from "react";
import Formsy from "formsy-react";
import { withStyles } from "@material-ui/core/styles";
import { basestyles } from "../Styles/base";
import InputFormValidator from "../Validators/InputFormValidator";
import LockIcon from "@material-ui/icons/LockOutlined";
import {
  Button,
  CssBaseline,
  FormControl,
  Input,
  InputLabel,
  Avatar,
  Typography
} from "@material-ui/core";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.setState({ canSubmit: false });
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  state = {
    canSubmit: false,
    email: "",
    password: ""
  };
  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  updateEmail(newValue) {
    this.setState({ email: newValue });
  }
  updatePassword(event) {
    this.setState({ password: event.target.value });
  }

  submitForm() {
    const model = {
      Username: this.state.email,
      Password: this.state.password
    };
    this.props.OnSubmit(model);
  }

  render() {
    return (
      <React.Fragment>
        <main className={this.props.classes.paper}>
          <CssBaseline />
          <Avatar className={this.props.classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography variant="headline">Sign in</Typography>
          <Formsy
            onValid={this.enableButton}
            onInvalid={this.disableButton}
            onValidSubmit={this.submitForm}
          >
            <InputFormValidator
              name="email"
              id="email"
              autoComplete="email"
              LabelText="Email Address"
              validations="isEmail"
              validationError="This is not a valid email"
              required
              setEmail={this.updateEmail}
            />
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.updatePassword}
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="raised"
              color="primary"
              disabled={!this.state.canSubmit}
              className={this.props.classes.submit}
            >
              Sign in
            </Button>
          </Formsy>
          <Button color="primary" className={this.props.classes.button}>
            Forgot Password?
          </Button>
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(basestyles)(Login);
