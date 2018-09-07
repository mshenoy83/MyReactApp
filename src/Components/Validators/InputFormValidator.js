import React from "react";
import { withFormsy } from "formsy-react";
import { Input, FormControl, InputLabel, Typography } from "@material-ui/core";

class InputFormValidator extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }
  changeValue(event) {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    this.props.setValue(event.currentTarget.value);
    this.props.setEmail(event.currentTarget.value);
  }
  render() {
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
        <InputLabel htmlFor={name}>{LabelText}</InputLabel>
        <Input
          onChange={this.changeValue}
          id={id}
          name={name}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
        />
        <Typography style={{ color: "red" }} variant="caption">
          {errorMessage}
        </Typography>
      </FormControl>
    );
  }
}

export default withFormsy(InputFormValidator);
