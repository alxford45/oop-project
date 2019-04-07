import React, { Component } from "react";
import MediaCard from "../components/MediaCard";
import { Card, List, ListItem, ListItemIcon, ListItemText, Theme, createStyles, WithStyles, withStyles, Grid } from "@material-ui/core";
import DashBar from "../components/DashBar";
import Calendar from "../components/Calendar";


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


class View extends Component<WithStyles<typeof styles>> {



    render() {
        const { classes } = this.props;
        return (
            <div className={this.props.classes.root}>
                <DashBar />
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Grid container spacing={40} >
                        <Grid item sm={6} md={4} lg={4}>

                        </Grid>
                        <Grid item sm={12} md={8} lg={8}>
                            <Calendar />
                        </Grid>
                    </Grid>
                </main>
            </div>
        )
    }
}
export default withStyles(styles)(View);