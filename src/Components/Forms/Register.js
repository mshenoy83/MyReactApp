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
import classnames from "classnames";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.updateEmail = this.updateEmail.bind(this);
  }
  updateEmail(newValue) {
    this.setState({ email: newValue });
  }
  render() {
    return (
      <React.Fragment>
        <Avatar className={this.props.classes.avatar}>
          <AddIcon />
        </Avatar>
        <Typography variant="headline">Sign up</Typography>
        <Formsy>
          <FormGroup row="true" margin="normal">
            <FormControl
              margin="normal"
              required
              className={classnames(
                this.props.classes.halfWidth,
                this.props.classes.spaceRight
              )}
            >
              <InputLabel htmlFor="firstname">First Name</InputLabel>
              <Input name="firstname" autoFocus id="firstname" />
            </FormControl>
            <FormControl
              margin="normal"
              required
              className={this.props.classes.halfWidth}
            >
              <InputLabel htmlFor="lastname">Last Name</InputLabel>
              <Input name="lastname" id="lastname" />
            </FormControl>
          </FormGroup>
          {/*<FormControl margin="normal" required fullWidth>
            <TextField
              id="date"
              label="Birthday"
              type="date"
              className={this.props.classes.dateField}
              InputLabelProps={{
                shrink: true
              }}
            />
          </FormControl>*/}
          <FormGroup row="true" margin="normal">
            <InputFormValidator
              name="email"
              id="email"
              autoComplete="email"
              LabelText="Email Address"
              validations="isEmail"
              validationError="This is not a valid email"
              required
              setEmail={this.updateEmail}
              className={classnames(
                this.props.classes.halfWidth,
                this.props.classes.spaceRight
              )}
            />
            <FormControl
              margin="normal"
              required
              className={this.props.classes.halfWidth}
            >
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </FormControl>
          </FormGroup>
          <FormGroup row="true" margin="normal">
            <FormControl
              margin="normal"
              required
              className={classnames(
                this.props.classes.halfWidth,
                this.props.classes.spaceRight
              )}
            >
              <InputLabel htmlFor="address1">Address Line1</InputLabel>
              <Input name="address1" id="address1" />
            </FormControl>
            <FormControl
              margin="normal"
              className={this.props.classes.halfWidth}
            >
              <InputLabel htmlFor="address2">Address Line2</InputLabel>
              <Input name="address2" id="address2" />
            </FormControl>
          </FormGroup>
          <FormGroup row="true" margin="normal">
            <FormControl
              margin="normal"
              required
              className={classnames(
                this.props.classes.halfWidth,
                this.props.classes.spaceRight
              )}
            >
              <InputLabel htmlFor="address1">Address Line1</InputLabel>
              <Input name="address1" id="address1" />
            </FormControl>
            <FormControl
              margin="normal"
              className={this.props.classes.halfWidth}
            >
              <InputLabel htmlFor="address2">Address Line2</InputLabel>
              <Input name="address2" id="address2" />
            </FormControl>
          </FormGroup>
        </Formsy>
      </React.Fragment>
    );
  }
}

export default withStyles(basestyles)(Register);
