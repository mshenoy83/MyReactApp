import React from "react";
import { withFormsy } from "formsy-react";
import { FormControl, TextField, Typography } from "@material-ui/core";

class DateValidator extends React.Component {
  changeValue = event => {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    this.props.setValue(event.currentTarget.value);
    this.props.setDate(event.currentTarget.value);
  };

  render = () => {
    const {
      name,
      id,
      autoComplete,
      LabelText,
      className,
      fullWidth,
      autoFocus
    } = this.props;
    // An error message is returned only if the component is invalid
    const errorMessage = this.props.getErrorMessage();
    return (
      <FormControl
        margin="normal"
        required
        className={className}
        fullWidth={fullWidth}
      >
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
        <Typography style={{ color: "red" }} variant="caption">
          {errorMessage}
        </Typography>
      </FormControl>
    );
  };
}

export default withFormsy(DateValidator);
