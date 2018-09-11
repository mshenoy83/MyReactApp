import React from "react";
import { withFormsy } from "formsy-react";
import {
  Input,
  FormControl,
  InputLabel,
  Typography,
  TextField
} from "@material-ui/core";

class InputFormValidator extends React.Component {
  changeValue = event => {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    this.props.setValue(event.currentTarget.value);
    this.props.setInputValue(event.currentTarget.value);
  };

  IsNullOrEmpty = value => {
    return !value || value === undefined || value === "" || value.length === 0;
  };
  render = () => {
    const {
      name,
      id,
      autoComplete,
      LabelText,
      className,
      fullWidth,
      autoFocus,
      type
    } = this.props;
    // An error message is returned only if the component is invalid
    const errorMessage = this.props.getErrorMessage();
    const hasError = !this.IsNullOrEmpty(errorMessage);
    return (
      <FormControl
        margin="normal"
        required
        className={className}
        fullWidth={fullWidth}
      >
        {this.props.type === "date" ? (
          <TextField
            id={id}
            onChange={this.changeValue}
            name={name}
            label={LabelText}
            type="date"
            InputLabelProps={{
              shrink: true
            }}
          />
        ) : (
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
        )}

        <Typography style={{ color: "red" }} variant="caption">
          {errorMessage}
        </Typography>
      </FormControl>
    );
  };
}

export default withFormsy(InputFormValidator);
