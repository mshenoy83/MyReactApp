import React from "react";
import Formsy from "formsy-react";
import {
  Button,
  FormControl,
  Input,
  TextField,
  InputLabel,
  Avatar,
  Typography,
  Paper,
  CssBaseline
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { basestyles } from "../Styles/base";
import InputFormValidator from "../Validators/InputFormValidator";
import AddIcon from "@material-ui/icons/AddCircleOutlined";
import classnames from "classnames";

class Register extends React.Component {
  updateEmail = newValue => {
    this.setState({ email: newValue });
  };
  render = () => {
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={this.props.classes.layout}>
          <Paper className={this.props.classes.paper}>
            <Avatar className={this.props.classes.avatar}>
              <AddIcon />
            </Avatar>
            <Typography variant="headline">Sign up</Typography>
            <Formsy>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="firstname">First Name</InputLabel>
                <Input name="firstname" autoFocus id="firstname" />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="lastname">Last Name</InputLabel>
                <Input name="lastname" id="lastname" />
              </FormControl>
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
                setEmail={this.updateEmail}
                fullWidth
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
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="address1">Address Line1</InputLabel>
                <Input name="address1" id="address1" />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="address2">Address Line2</InputLabel>
                <Input name="address2" id="address2" />
              </FormControl>
            </Formsy>
          </Paper>
        </main>
      </React.Fragment>
    );
  };
}

export default withStyles(basestyles)(Register);
