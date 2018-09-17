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
  CssBaseline
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
    MobileNumber: "",
    Address1: "",
    Address2: "",
    AddressSuburb: "",
    AddressState: "",
    AddressPCode: "",
    DateOfBirth: "",
    TriggerValidation: false
  };

  updateInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  Registration = event => {
    event.preventDefault();
    this.setState({ TriggerValidation: true });
  };

  render = () => {
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
                name="UserName"
                id="email"
                autoComplete="email"
                LabelText="Email Address"
                validations="isEmail,IsRequired"
                validationErrors={{
                  isEmail: "This is not a valid email",
                  IsRequired: "This is a required field"
                }}
                setInputValue={this.updateInput}
                fullWidth
                IsInitialised={this.state.TriggerValidation}
              />
              <InputFormValidator
                name="Password"
                id="password"
                autoComplete="current-password"
                LabelText="Password"
                validations="IsRequired"
                validationErrors={{
                  IsRequired: "This is a required field"
                }}
                setInputValue={this.updateInput}
                fullWidth
                IsInitialised={this.state.TriggerValidation}
              />
              <InputFormValidator
                name="FirstName"
                id="firstname"
                LabelText="First Name"
                validations="IsRequired"
                validationErrors={{
                  IsRequired: "This is a required field"
                }}
                setInputValue={this.updateInput}
                fullWidth
                IsInitialised={this.state.TriggerValidation}
              />
              <InputFormValidator
                name="FamilyName"
                id="lastname"
                LabelText="Last Name"
                validations="IsRequired"
                validationErrors={{
                  IsRequired: "This is a required field"
                }}
                setInputValue={this.updateInput}
                fullWidth
                IsInitialised={this.state.TriggerValidation}
              />
              <InputFormValidator
                name="MobileNumber"
                id="mobilenumber"
                autoComplete="mobilenumber"
                LabelText="Mobile Number"
                validations="IsValidPhoneNumber,IsRequired"
                validationErrors={{
                  IsValidPhoneNumber: "This is not a valid mobile number",
                  IsRequired: "This is a required field"
                }}
                setInputValue={this.updateInput}
                fullWidth
                IsInitialised={this.state.TriggerValidation}
              />
              <InputFormValidator
                type="date"
                margin="normal"
                fullWidth
                id="date"
                name="DateOfBirth"
                LabelText="Birthday"
                setInputValue={this.updateInput}
                validations="IsOlderThan18,IsRequired"
                validationErrors={{
                  IsOlderThan18:
                    "You should be atleast 18 years old to register",
                  IsRequired: "This is a required field"
                }}
                IsInitialised={this.state.TriggerValidation}
              />
              <InputFormValidator
                name="Address1"
                id="address1"
                LabelText="Address Line1"
                validations="IsRequired"
                validationErrors={{
                  IsRequired: "This is a required field"
                }}
                setInputValue={this.updateInput}
                fullWidth
                IsInitialised={this.state.TriggerValidation}
              />
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="address2">Address Line2</InputLabel>
                <Input
                  name="Address2"
                  id="address2"
                  OnChange={this.updateInput}
                />
              </FormControl>
              <InputFormValidator
                name="AddressSuburb"
                id="suburb"
                LabelText="Suburb"
                validations="IsRequired"
                validationErrors={{
                  IsRequired: "This is a required field"
                }}
                setInputValue={this.updateInput}
                fullWidth
                IsInitialised={this.state.TriggerValidation}
              />
              <InputFormValidator
                name="AddressState"
                id="state"
                type="select"
                LabelText="State"
                validations="IsRequired"
                validationErrors={{
                  IsRequired: "This is a required field"
                }}
                setInputValue={this.updateInput}
                value={this.state.AddressState}
                fullWidth
                IsInitialised={this.state.TriggerValidation}
                dataArray={States}
              />
              <Button
                type="submit"
                fullWidth
                variant="raised"
                color="primary"
                className={this.props.classes.submit}
                onClick={this.Registration}
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
