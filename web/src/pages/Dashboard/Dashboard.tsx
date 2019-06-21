import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import EditIcon from "@material-ui/icons/Edit";
import ShareIcon from "@material-ui/icons/Share";
import React from "react";
import { Query } from "react-apollo";
import { Redirect } from "react-router-dom";
import DashBar from "../../components/DashBar";
import { me } from "../../graphql/queries/me";
import { myLists } from "../../graphql/queries/myLists";
import { styles } from "./Dashboard.styles";

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
                    if (data.myLists.length === 0) {
                      return (
                        <div>
                          <Paper
                            style={{
                              padding: "10px"
                            }}
                            className={classes.emptyPaper}
                          >
                            <Typography
                              style={{ textAlign: "center" }}
                              variant="h5"
                              component="h3"
                            >
                              No lists found.
                            </Typography>
                            <Typography
                              style={{ textAlign: "center" }}
                              component="p"
                            >
                              Create a list to get started!
                            </Typography>
                          </Paper>
                        </div>
                      );
                    }
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
