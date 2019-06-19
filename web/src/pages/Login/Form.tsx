import { List, ListItem, ListItemText, WithStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { styles } from "./Form.styles";

interface Props extends WithStyles {
  onSubmit: (data: State) => void;
}
interface State {
  email: string;
  password: string;
}
class Form extends React.Component<Props, State> {
  state = {
    email: "",
    password: ""
  };

  handleChange = (e: any) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    } as any);
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
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={this.handleChange}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.handleChange}
                />
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Link
                to={"./Dashboard"}
                style={{ textDecoration: "none" }}
                onClick={() => this.props.onSubmit(this.state)}
              >
                <Button
                  type="button"
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

export default withStyles(styles)(Form);
