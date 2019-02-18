import React from 'react';
import classNames from 'classnames';
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

class DashCard extends React.Component {

    state = {
        open: true,
        value: 0,
    };

    handleClick = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        return (
            <Card >
                <CardMedia
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                {this.state.open ?
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            List Title
                    </Typography>
                        <Typography gutterBottom variant="h6" component="h2">
                            2/16/19
                    </Typography>
                        {ArtistList()}
                    </CardContent>
                    : null}
                {this.state.open ?
                <CardActions>
                    <Button size="small" color="primary" >
                        Edit
                    </Button>
                    <Button onClick={this.handleClick} size="small" color="primary" >
                        Delete
                    </Button>
                </CardActions>
                : null}
            </Card>
        );
    }
}

export default DashCard;
