import React, { Component } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Dashboard from "./Dashboard";
import { Route, Link, NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";
import { List, ListItem, ListItemText, WithStyles, Theme, createStyles } from "@material-ui/core";
import { gql } from "apollo-boost";

const loginMutation = gql`
  mutation LoginMutation($email: String!) {
    login(email: $email) {
      id
      email
    }
  }
`;

const styles = (theme: Theme) => createStyles({
  root: {
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,

    height: "100vh",
    overflow: "auto"
  },
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },


});

class Login extends Component<WithStyles<typeof styles>>{
  handleSubmit = (event: { preventDefault: () => void }) => {
    this.handleSubmit.bind(this);
    event.preventDefault();
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <NavBar>
          <List>
            {["Home", "Login"].map(value => (
              <ListItem button key={value}>
                <NavLink to={value}>
                  <ListItemText primary={value} />
                </NavLink>
              </ListItem>
            ))}
          </List>
        </NavBar>
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <Avatar>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
          </Typography>
            <form className={classes.form} onSubmit={this.handleSubmit}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input id="email" name="email" autoComplete="email" autoFocus />
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
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Link to={"./Dashboard"} style={{ textDecoration: "none" }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Sign in
              </Button>
              </Link>
            </form>
          </Paper>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
