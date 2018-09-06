import { white } from "@material-ui/core/colors";

export const basestyles = theme => ({
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
  },
  button: {
    marginTop: theme.spacing.unit
  },
  iconWrapper: {
    overflow: "auto"
  },
  iconbutton: {
    float: "right"
  },
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  dialogFooter: {
    padding: "10px 20px",
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    display: "inline-flex"
  },
  whitebutton: {
    backgroundColor: "#ffffff",
    "&:hover": {
      backgroundColor: "rgba(78, 203, 244, 0.2)"
    }
  },
  spacedText: {
    marginRight: "5px"
  }
});
