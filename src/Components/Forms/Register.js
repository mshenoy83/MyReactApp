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
              <InputFormValidator
                name="firstname"
                id="firstname"
                LabelText="First Name"
                validations="IsRequired"
                validationErrors={{
                  IsRequired: "This is a required field"
                }}
                setInputValue={this.updateFirstName}
                fullWidth
              />
              <InputFormValidator
                name="lastname"
                id="lastname"
                LabelText="Last Name"
                validations="IsRequired"
                validationErrors={{
                  IsRequired: "This is a required field"
                }}
                setInputValue={this.updateLastName}
                fullWidth
              />
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
              <InputFormValidator
                type="date"
                margin="normal"
                fullWidth
                id="date"
                name="date"
                LabelText="Birthday"
                setInputValue={this.OnBirthDateChange}
                validations="IsOlderThan18,IsRequired"
                validationErrors={{
                  IsOlderThan18:
                    "You should be atleast 18 years old to register",
                  IsRequired: "This is a required field"
                }}
              />
              <InputFormValidator
                name="address1"
                id="address1"
                LabelText="Address Line1"
                validations="IsRequired"
                validationErrors={{
                  IsRequired: "This is a required field"
                }}
                setInputValue={this.updateAddressLine1}
                fullWidth
              />
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="address2">Address Line2</InputLabel>
                <Input
                  name="address2"
                  id="address2"
                  OnChange={this.updateAddressLine2}
                />
              </FormControl>
              <InputFormValidator
                name="suburb"
                id="suburb"
                LabelText="Suburb"
                validations="IsRequired"
                validationErrors={{
                  IsRequired: "This is a required field"
                }}
                setInputValue={this.updateAddressLine1}
                fullWidth
              />
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
