import React from "react";
import Formsy from "formsy-react";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Avatar,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { basestyles } from "../Styles/base";
import InputFormValidator from "../Validators/InputFormValidator";
import AddIcon from "@material-ui/icons/AddCircleOutlined";

class Register extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Avatar className={this.props.classes.avatar}>
          <AddIcon />
        </Avatar>
        <Typography variant="headline">Sign up</Typography>
        <Formsy>
          <FormGroup row="true">
            <FormControl margin="normal" required>
              <InputLabel htmlFor="firstname">First Name</InputLabel>
              <Input name="firstname" autoFocus id="firstname" />
            </FormControl>
            <FormControl margin="normal" required>
              <InputLabel htmlFor="lastname">Last Name</InputLabel>
              <Input name="lastname" autoFocus id="lastname" />
            </FormControl>
          </FormGroup>
          <InputFormValidator
            name="email"
            id="email"
            autoComplete="email"
            LabelText="Email Address"
            validations="isEmail"
            validationError="This is not a valid email"
            required
          />
        </Formsy>
      </React.Fragment>
    );
  }
}

export default withStyles(basestyles)(Register);
