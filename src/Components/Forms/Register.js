import React from "react";
import Formsy from "formsy-react";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  TextField,
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
          <FormGroup row="true" margin="normal">
            <FormControl margin="normal" required>
              <InputLabel htmlFor="firstname">First Name</InputLabel>
              <Input name="firstname" autoFocus id="firstname" />
            </FormControl>
            <FormControl margin="normal" required>
              <InputLabel htmlFor="lastname">Last Name</InputLabel>
              <Input name="lastname" id="lastname" />
            </FormControl>
          </FormGroup>
          <FormControl margin="normal" required fullWidth>
            <TextField
              id="date"
              label="Birthday"
              type="date"
              className={this.props.classes.dateField}
              InputLabelProps={{
                shrink: true
              }}
            />
          </FormControl>
          <InputFormValidator
            name="email"
            id="email"
            autoComplete="email"
            LabelText="Email Address"
            validations="isEmail"
            validationError="This is not a valid email"
            required
          />
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="address1">Address Line1</InputLabel>
            <Input name="address1" id="address1" />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="address2">Address Line2</InputLabel>
            <Input name="address2" id="address2" />
          </FormControl>
        </Formsy>
      </React.Fragment>
    );
  }
}

export default withStyles(basestyles)(Register);
