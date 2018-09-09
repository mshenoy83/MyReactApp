import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import { basestyles } from "../Styles/base";

class SignInFooter extends React.Component {
  render = () => {
    return (
      <div className={this.props.classes.dialogFooter}>
        <Typography variant="body1" className={this.props.classes.spacedText}>
          {this.props.FooterLabel}
        </Typography>
        <Button
          color="default"
          variant="contained"
          size="medium"
          className={this.props.classes.whitebutton}
          onClick={this.props.OnButtonClick}
        >
          {this.props.FooterButtonText}
        </Button>
      </div>
    );
  };
}

export default withStyles(basestyles)(SignInFooter);
