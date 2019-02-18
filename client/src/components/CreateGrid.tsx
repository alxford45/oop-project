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
import Icon from '@material-ui/core/Icon';
import DashCard from './DashCard';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';


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

class CreateGrid extends React.Component {
    state = {
        open: true,
        value: 0,
    };

    handleClick = () => {
        this.setState({ value: this.state.value + 1 });
    };


    render() {
        return (
            <Grid container spacing={40} >
                <Grid item sm={6} md={4} lg={4}>
                    {this.state.value > 0 ? null :
                        <Fab color="primary" aria-label="Add" onClick={this.handleClick}>
                            <AddIcon />
                        </Fab>
                    }
                    {this.state.value > 0 ? <Card>{MediaCard()}</Card> : <Card></Card>}
                </Grid>
                <Grid item sm={6} md={4} lg={4}>
                    {this.state.value > 1 ? null :
                        <Fab color="primary" aria-label="Add" onClick={this.handleClick}>
                            <AddIcon />
                        </Fab>
                    }
                    {this.state.value > 1 ? <Card>{MediaCard()}</Card> : <Card></Card>}
                </Grid>
                <Grid item sm={6} md={4} lg={4}>
                    {this.state.value > 2 ? null :
                        <Fab color="primary" aria-label="Add" onClick={this.handleClick}>
                            <AddIcon />
                        </Fab>
                    }
                    {this.state.value > 2 ? <Card>{MediaCard()}</Card> : <Card></Card>}
                </Grid>
            </Grid>
        );
    }
}

export default CreateGrid;
