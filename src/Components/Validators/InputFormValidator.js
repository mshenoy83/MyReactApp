import React from "react";
import { withFormsy } from "formsy-react";
import {
  Input,
  FormControl,
  InputLabel,
  Typography,
  TextField,
  Select,
  MenuItem
} from "@material-ui/core";

class InputFormValidator extends React.Component {
  changeValue = event => {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    this.setState({ Initialised: true });
    this.props.setValue(event.currentTarget.value);
    this.props.setInputValue(event);
  };

  state = {
    Initialised: false
  };

  IsNullOrEmpty = value => {
    return !value || value === undefined || value === "" || value.length === 0;
  };

  renderSwitch = (param, hasError) => {
    const {
      name,
      id,
      autoComplete,
      LabelText,
      autoFocus,
      type,
      MenuItemMap,
      value
    } = this.props;

    switch (param) {
      case "date":
        return (
          <TextField
            id={id}
            onChange={this.changeValue}
            name={name}
            label={LabelText}
            type="date"
            error={hasError}
            InputLabelProps={{
              shrink: true
            }}
          />
        );
      case "select":
        return (
          <React.Fragment>
            <InputLabel htmlFor="State">State</InputLabel>
            <Select
              onChange={this.changeValue}
              id={id}
              name={name}
              error={hasError}
              value={value}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {MenuItemMap}
            </Select>
          </React.Fragment>
        );
      default:
        return (
          <React.Fragment>
            <InputLabel htmlFor={name}>{LabelText}</InputLabel>
            <Input
              onChange={this.changeValue}
              id={id}
              name={name}
              autoComplete={autoComplete}
              autoFocus={autoFocus}
              error={hasError}
              type={type}
            />
          </React.Fragment>
        );
    }
  };

  render = () => {
    const { className, fullWidth } = this.props;
    // An error message is returned only if the component is invalid
    const errorMessage = this.props.getErrorMessage();
    const hasError =
      !this.IsNullOrEmpty(errorMessage) &&
      (this.state.Initialised || this.props.IsInitialised);
    return (
      <FormControl
        margin="normal"
        required
        className={className}
        fullWidth={fullWidth}
      >
        {this.renderSwitch(this.props.type, hasError)}
        {this.state.Initialised || this.props.IsInitialised ? (
          <Typography style={{ color: "red" }} variant="caption">
            {errorMessage}
          </Typography>
        ) : null}
      </FormControl>
    );
  };
}

export default withFormsy(InputFormValidator);
