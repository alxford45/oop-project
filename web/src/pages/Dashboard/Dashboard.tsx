import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  List,
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
import { Redirect, RouteComponentProps } from "react-router-dom";
import DashBar from "../../components/DashBar";
import { me } from "../../graphql/queries/me";
import { myLists } from "../../graphql/queries/myLists";
import { styles } from "./Dashboard.styles";
import { Preview } from "./Preview";
import { View } from "../View/View";
interface Props extends WithStyles, RouteComponentProps {}
class Dashboard extends React.Component<Props> {
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
            console.log(data);
            return <Redirect to="/Login" />;
          }
          return (
            <div className={this.props.classes.root}>
              <DashBar {...this.props} />
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
                        {data.myLists.map((refrence, index) => {
                          return (
                            <Grid key={index} item sm={6} md={4} lg={4}>
                              <Card className={classes.list}>
                                <CardHeader title={refrence.title} />
                                <Divider />
                                <CardContent>
                                  <List>{Preview(refrence.ids)}</List>
                                </CardContent>
                                <div className={classes.buttons}>
                                  <IconButton
                                    aria-label="view"
                                    onClick={() => {
                                      const listId = refrence.id;
                                      this.props.history.push("/View", {
                                        listId: listId
                                      });
                                    }}
                                  >
                                    <ShareIcon />
                                  </IconButton>
                                  <IconButton aria-label="edit">
                                    <EditIcon />
                                  </IconButton>
                                  <IconButton aria-label="calendar">
                                    <CalendarTodayIcon />
                                  </IconButton>
                                </div>
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
