import React from "react";
import Formsy from "formsy-react";
import { withStyles } from "@material-ui/core/styles";
import { basestyles } from "../Styles/base";
import InputFormValidator from "../Validators/InputFormValidator";
import LockIcon from "@material-ui/icons/LockOutlined";
import baserules from "../ValidationRules/BaseRules";
import {
  Button,
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
  }

  state = {
    canSubmit: false,
    email: "",
    password: ""
  };
  disableButton = () => {
    this.setState({ canSubmit: false });
  };

  enableButton = () => {
    this.setState({ canSubmit: true });
  };

  updateInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitForm = () => {
    const model = {
      Username: this.state.email,
      Password: this.state.password
    };
    this.props.OnSubmit(model);
  };

  render = () => {
    return (
      <React.Fragment>
        <Avatar className={this.props.classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography variant="headline">Log in</Typography>
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
            fullWidth
            autoFocus
            setInputValue={this.updateInput}
          />
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.updateInput}
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
      </React.Fragment>
    );
  };
}

export default withStyles(basestyles)(Login);
