import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Button,
  CssBaseline,
  FormControl,
  Input,
  InputLabel,
  Avatar,
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  IconButton
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/LockOutlined";
import CloseIcon from "@material-ui/icons/Close";
import { basestyles } from "../Styles/base";

@withStyles(basestyles)
export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.setState({ open: this.props.IsOpen });
  }

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
            <main className={this.props.classes.paper}>
              <CssBaseline />
              <Avatar className={this.props.classes.avatar}>
                <LockIcon />
              </Avatar>
              <Typography variant="headline">Sign in</Typography>
              <form className={this.props.classes.form}>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="email">Email Address</InputLabel>
                  <Input
                    id="email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </FormControl>
                <Button
                  type="submit"
                  fullWidth
                  variant="raised"
                  color="primary"
                  className={this.props.classes.submit}
                >
                  Sign in
                </Button>
              </form>
              <Button color="primary" className={this.props.classes.button}>
                Forgot Password?
              </Button>
            </main>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}
