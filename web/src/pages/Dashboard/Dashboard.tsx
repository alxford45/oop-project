import {
  Avatar,
  Button,
  Card,
  Fab,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CardHeader,
  CardContent,
  ListItemAvatar,
  CardActionArea
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import React from "react";
import { Link, Redirect } from "react-router-dom";
import DashBar from "../../components/DashBar";
import { styles } from "./Dashboard.styles";
import { Query } from "react-apollo";
import { myLists } from "../../graphql/queries/myLists";
import { me } from "../../graphql/queries/me";
import { IconButton } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import EditIcon from "@material-ui/icons/Edit";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

class Dashboard extends React.Component<WithStyles> {
  render() {
    const { classes } = this.props;
    return (
      <Query query={me}>
        {({ data, loading }) => {
          if (loading) {
            return null;
          }

          if (!data) {
            return <div>data is undefined</div>;
          }

          if (!data.me) {
            return <Redirect to="/login" />;
          }
          return (
            <div className={this.props.classes.root}>
              <DashBar />
              <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Typography
                  variant="h4"
                  gutterBottom
                  component="h2"
                  align="center"
                >
                  Your Personal Music Maps
                </Typography>
                <Divider />

                <Query query={myLists}>
                  {({ loading, data }) => {
                    if (loading) return <div>loading</div>;
                    if (!data) return <div>error: no data</div>;
                    console.log(data);
                    return (
                      <Grid container spacing={40}>
                        {data.myLists.map((element, index) => {
                          return (
                            <Grid key={index} item sm={6} md={4} lg={4}>
                              <Card className={classes.list}>
                                <CardHeader title={element.title} />
                                <Divider />
                                <CardContent>
                                  <List>
                                    {element.ids
                                      .filter((_, index) => index < 3)
                                      .map((x, index) => {
                                        return (
                                          <ListItem key={index}>
                                            <ListItemAvatar>
                                              <Avatar />
                                            </ListItemAvatar>
                                            <ListItemText>{x}</ListItemText>
                                          </ListItem>
                                        );
                                      })}
                                  </List>
                                </CardContent>
                                <CardActionArea>
                                  <IconButton aria-label="view">
                                    <ShareIcon />
                                  </IconButton>
                                  <IconButton aria-label="edit">
                                    <EditIcon />
                                  </IconButton>
                                  <IconButton aria-label="calendar">
                                    <CalendarTodayIcon />
                                  </IconButton>
                                </CardActionArea>
                              </Card>
                            </Grid>
                          );
                        })}
                      </Grid>
                    );
                  }}
                </Query>
              </main>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default withStyles(styles)(Dashboard);
