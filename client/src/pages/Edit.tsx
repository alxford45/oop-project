import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

class NestedList extends React.Component {
    state = {
        open: true,
    };

    handleClick = () => {
        this.setState(({ open: !this.state.open }));
    };

    render() {

        return (
            <List
                component="nav"
                subheader={<ListSubheader component="div">Favorite Artists</ListSubheader>}
            >
                <ListItem button >
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="Artist #1" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="Artist #2" />
                </ListItem>
                <ListItem button onClick={this.handleClick}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="Artist #3" />
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <List >
                        <ListItem button >
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText inset primary="Album #1" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        );
    }
}



export default (NestedList);