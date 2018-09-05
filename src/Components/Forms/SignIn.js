import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Avatar from "@material-ui/core/Avatar";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import LockIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  layout: {
    width: "auto",
    display: "block", // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

@withStyles(styles)
export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <React.Fragment>
        <Dialog
          open={this.props.IsOpen}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <main className={this.props.classes.paper}>
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
            </main>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}
