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
import { List, ListItem, ListItemText } from "@material-ui/core";
import { gql } from "apollo-boost";

const loginMutation = gql`
  mutation LoginMutation($email: String!) {
    login(email: $email) {
      id
      email
    }
  }
`;

class Login extends Component {
  handleSubmit = (event: { preventDefault: () => void }) => {
    this.handleSubmit.bind(this);
    event.preventDefault();
  };
  render() {
    return (
      <main>
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
        <CssBaseline />
        <Paper>
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={this.handleSubmit}>
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
    );
  }
}

export default Login;
