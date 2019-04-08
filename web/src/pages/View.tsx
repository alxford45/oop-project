import React, { Component } from "react";
import { Theme, createStyles, WithStyles, withStyles, Grid } from "@material-ui/core";
import DashBar from "../components/DashBar";
import Calendar from "../components/Calendar";
import { Query } from "react-apollo";
import { eventQuery } from "../graphql/eventQuery";



const styles = (theme: Theme) => createStyles({
    root: {
        display: "flex",
        background: 'linear-gradient(45deg, #37474f 30%, #78909c 70%, #b0bec5 90%)'
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        height: "100vh",
        overflow: "auto"
    },
});

let name = [""];
const date = ["09-09-09"];

class View extends Component<any, any, WithStyles<typeof styles>> {

    constructor(props: any) {
        super(props);
        this.state = {
            list: this.props.List,
        };
    }

    saveEvent = (id, displayName, uri, location, type, venue, start, performance) => {
        name.push(displayName);
        date.push(start.date);
        //console.log(id);
        //console.log(displayName);
        //console.log(uri);
        //console.log(location);
        //console.log(type);
        //console.log(venue);
        //console.log(start);
        //console.log(start);
        console.log(date);
    }

    get = id => {
        return (
            <Query query={eventQuery} variables={{ id }}>
                {({ loading, error, data }) => {
                    if (loading) return <div>loading</div>;
                    console.log(data);
                    return (
                        data.eventSearch.resultsPage.results.event.map(
                            (
                                {
                                    id,
                                    displayName,
                                    uri,
                                    location,
                                    type,
                                    venue,
                                    start,
                                    performance
                                },
                            ) => {
                                this.saveEvent(id,
                                    displayName,
                                    uri,
                                    location,
                                    type,
                                    venue,
                                    start,
                                    performance,
                                )
                            }
                        )
                    );
                }}
            </Query>
        );
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={this.props.classes.root}>
                <DashBar />
                <main className={classes.content}>
                    {this.get(660883)}
                    <div className={classes.appBarSpacer} />
                    <Grid container spacing={40} >
                        <Grid item sm={6} md={4} lg={4}>

                        </Grid>
                        <Grid item sm={12} md={8} lg={8}>
                            <Calendar start={date} name={name} />
                        </Grid>
                    </Grid>
                </main>
            </div>
        )
    }
}
export default withStyles(styles)(View);