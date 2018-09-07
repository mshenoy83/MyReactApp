import React from "react";
import { Typography, Button } from "@material-ui/core";
import InputFormValidator from "../Validators/InputFormValidator";
import { withStyles } from "@material-ui/core/styles";
import { basestyles } from "../Styles/base";
import Formsy from "formsy-react";

class ForgotPassword extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Typography variant="headline">Forgot your password?</Typography>
        <br />
        <Formsy>
          <Typography variant="body1">
            Enter the email associated with your account in the field below and
            we'll email you a link to reset your password.
          </Typography>
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
            setEmail={this.updateEmail}
          />
          <Button type="submit" fullWidth variant="raised" color="primary">
            Send
          </Button>
        </Formsy>
        <Button
          color="primary"
          className={this.props.classes.button}
          onClick={this.props.BacktoLogin}
        >
          Back to login
        </Button>
      </React.Fragment>
    );
  }
}

export default withStyles(basestyles)(ForgotPassword);
