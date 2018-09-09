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

  IsUserOlderThan18 = () => {};

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
                <InputLabel htmlFor="firstname">First Name</InputLabel>
                <Input name="firstname" autoFocus id="firstname" />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="lastname">Last Name</InputLabel>
                <Input name="lastname" id="lastname" />
              </FormControl>
              <DateValidator
                margin="normal"
                required
                fullWidth
                id="date"
                name="date"
                LabelText="Birthday"
                validations={{
                  myCustomIsFiveValidation: function(values, value) {
                    values; // Other current values in form {foo: 'bar', 'number': 5}
                    value; // 5
                    return 5 === value ? true : "No five"; // You can return an error
                  }
                }}
                validationError="You should be atleast 18 years old to register"
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
                  onChange={this.handleSelectChange}
                  value={this.state.AddressState}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {Data.map(MakeItem)}
                </Select>
              </FormControl>
            </Formsy>
          </Paper>
        </main>
      </React.Fragment>
    );
  };
}

export default withStyles(basestyles)(Register);
