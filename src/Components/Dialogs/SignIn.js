import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Dialog, DialogContent, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { basestyles } from "../Styles/base";
import Login from "../Forms/Login";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.setState({ open: this.props.IsOpen });
  }
  state = {
    open: false
  };

  render() {
    return (
      <React.Fragment>
        <Dialog
          open={this.props.IsOpen}
          className={this.props.classes.signInDialog}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <div className={this.props.classes.iconWrapper}>
              <IconButton
                color="primary"
                onClick={this.props.handleClose}
                aria-label="Close"
                className={this.props.classes.iconbutton}
              >
                <CloseIcon color="primary" />
              </IconButton>
            </div>
            <Login OnSubmit={this.props.OnSubmit} />
          </DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default withStyles(basestyles)(SignIn);
