import React from 'react';
import classNames from 'classnames';
import { withStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from "@material-ui/core/Button";
import ImageIcon from '@material-ui/icons/Image';


const drawerWidth = 240;


const styles = (theme: Theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        height: '100vh',
        overflow: 'auto',
    },
    chartContainer: {
        marginLeft: -22,
    },
    tableContainer: {
        height: 320,
    },
    h5: {
        marginBottom: theme.spacing.unit * 2,
    },
});

function ArtistList() {
    return (
        <List>
            <ListItem button>
                <ListItemIcon>
                    <ImageIcon />
                </ListItemIcon>
                <ListItemText inset primary="Artist #1" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <ImageIcon />
                </ListItemIcon>
                <ListItemText inset primary="Artist #2" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <ImageIcon />
                </ListItemIcon>
                <ListItemText inset primary="Artist #3" />
            </ListItem>
        </List>
    );
}

function MediaCard() {
    return (
        <Card >
            <CardMedia
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    List Title
                    </Typography>
                <Typography gutterBottom variant="h6" component="h2">
                    2/16/19
                    </Typography>
                {ArtistList()}
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" >
                    Edit
                </Button>
                <Button size="small" color="primary" >
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

function Grids() {
    return (
        <Grid container spacing={40} >
            <Grid item sm={6} md={4} lg={4}>
                <Card >
                    {MediaCard()}
                </Card>
            </Grid>
            <Grid item sm={6} md={4} lg={4}>
                <Card >
                    {MediaCard()}
                </Card>
            </Grid>
            <Grid item sm={6} md={4} lg={4}>
                <Card >
                    {MediaCard()}
                </Card>
            </Grid>
            <Grid item sm={6} md={4} lg={4}>
                <Card >
                    {MediaCard()}
                </Card>
            </Grid>
            <Grid item sm={6} md={4} lg={4}>
                <Card >
                    {MediaCard()}
                </Card>
            </Grid>
            <Grid item sm={6} md={4} lg={4}>
                <Card >
                    {MediaCard()}
                </Card>
            </Grid>
        </Grid>
    );
}

class Dashboard extends React.Component {
    state = {
        open: true,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };



    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="absolute"
                    className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
                >
                    <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(
                                classes.menuButton,
                                this.state.open && classes.menuButtonHidden,
                            )}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            className={classes.title}
                        >
                            Dashboard
            </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List></List>
                    <Divider />
                    <List></List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Typography variant="h4" gutterBottom component="h2">
                        Lists
                    </Typography>
                    {Grids()}
                </main>
            </div>
        );
    }
}



export default withStyles(styles)(Dashboard);