import React, { Component } from "react";
import MediaCard from "../components/MediaCard";
import { Card, List, ListItem, ListItemIcon, ListItemText, Theme, createStyles, WithStyles, withStyles } from "@material-ui/core";
import DashBar from "../components/DashBar";


const styles = (theme: Theme) => createStyles({
    root: {
        display: "flex"
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

                </main>
            </div>
        )
    }
}
export default withStyles(styles)(View);