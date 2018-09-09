import React from "react";
import Formsy from "formsy-react";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  Avatar,
  Typography,
  Paper,
  CssBaseline,
  Select,
  MenuItem
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { basestyles } from "../Styles/base";
import InputFormValidator from "../Validators/InputFormValidator";
import DateValidator from "../Validators/DateValidator";
import AddIcon from "@material-ui/icons/AddCircleOutlined";
import classnames from "classnames";
import States from "../Data/states";

class Register extends React.Component {
  updateEmail = newValue => {
    this.setState({ UserName: newValue });
  };
  state = {
    UserName: "",
    Password: "",
    FirstName: "",
    FamilyName: "",
    Address1: "",
    Address2: "",
    AddressSuburb: "",
    AddressState: "",
    AddressPCode: "",
    DateOfBirth: ""
  };
  handleSelectChange = event => {
    this.setState({
      AddressState: event.target.value
    });
  };

  updatePhoneNumber = newValue => {
    this.setState({ PhoneNumber: newValue });
  };

  OnBirthDateChange = value => {
    this.setState({ DateOfBirth: value });
  };

  updatePassword = newValue => {
    this.setState({ Password: newValue });
  };

  Registration = () => {};

  render = () => {
    var Data = States,
      MakeItem = function(x) {
        return <MenuItem value={x.id}>{x.Name}</MenuItem>;
      };

    return (
      <React.Fragment>
        <CssBaseline />
        <main
          className={classnames(
            this.props.classes.layout,
            this.props.classes.topMargin
          )}
        >
          <Paper className={this.props.classes.paper}>
            <Avatar className={this.props.classes.avatar}>
              <AddIcon />
            </Avatar>
            <Typography variant="headline">Sign up</Typography>
            <Formsy>
              <InputFormValidator
                name="email"
                id="email"
                autoComplete="email"
                LabelText="Email Address"
                validations="isEmail,IsRequired"
                validationErrors={{
                  isEmail: "This is not a valid email",
                  IsRequired: "This is a required field"
                }}
                setInputValue={this.updateEmail}
                fullWidth
              />
              <InputFormValidator
                name="password"
                id="password"
                autoComplete="current-password"
                LabelText="Password"
                validations="IsRequired"
                validationErrors={{
                  IsRequired: "This is a required field"
                }}
                setInputValue={this.updatePassword}
                fullWidth
              />

              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="firstname">First Name</InputLabel>
                <Input name="firstname" autoFocus id="firstname" />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="lastname">Last Name</InputLabel>
                <Input name="lastname" id="lastname" />
              </FormControl>
              <InputFormValidator
                name="mobilenumber"
                id="mobilenumber"
                autoComplete="mobilenumber"
                LabelText="Mobile Number"
                validations="IsValidPhoneNumber,IsRequired"
                validationErrors={{
                  IsValidPhoneNumber: "This is not a valid mobile number",
                  IsRequired: "This is a required field"
                }}
                setInputValue={this.updatePhoneNumber}
                fullWidth
              />
              <DateValidator
                margin="normal"
                fullWidth
                id="date"
                name="date"
                LabelText="Birthday"
                setDate={this.OnBirthDateChange}
                validations="IsOlderThan18,IsRequired"
                validationErrors={{
                  IsOlderThan18:
                    "You should be atleast 18 years old to register",
                  IsRequired: "This is a required field"
                }}
              />
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="address1">Address Line1</InputLabel>
                <Input name="address1" id="address1" />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="address2">Address Line2</InputLabel>
                <Input name="address2" id="address2" />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="suburb">Suburb</InputLabel>
                <Input name="suburb" id="suburb" />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="State">State</InputLabel>
                <Select
                  required
                  onChange={this.handleSelectChange}
                  value={this.state.AddressState}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {Data.map(MakeItem)}
                </Select>
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="raised"
                color="primary"
                className={this.props.classes.submit}
                OnClick={this.Registration}
                formNoValidate
              >
                Register and Continue
              </Button>
            </Formsy>
          </Paper>
        </main>
      </React.Fragment>
    );
  };
}

export default withStyles(basestyles)(Register);
