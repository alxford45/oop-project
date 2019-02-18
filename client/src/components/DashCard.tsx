import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from "@material-ui/core/Button";
import ImageIcon from '@material-ui/icons/Image';
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
            <div>
                {this.state.open ? null :
                    <Fab color="primary" aria-label="Add" onClick={this.handleClick}>
                        <AddIcon />
                    </Fab>
                }
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
            </div >
        );
    }
}

export default DashCard;
