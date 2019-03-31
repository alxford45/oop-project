import React from 'react';
import DashBar from '../components/DashBar'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles, Theme } from "@material-ui/core/styles";
import { InputBase, WithStyles, createStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import ImageIcon from "@material-ui/icons/Image";
import Divider from "@material-ui/core/Divider";
import { addTypenameToDocument } from 'apollo-utilities';
import Avatar from '@material-ui/core/Avatar';



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


class NestedList extends React.Component<WithStyles<typeof styles>> {
    state = {
        value: "",
        id: 0,
        search: [

        ],
        list: [

        ]
    };

    handleChange = (evt) => {
        this.setState(({ value: evt.target.value }));
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        const Artist = {
            name: this.state.value,
            icon: <Avatar />
        };
        const newSearch = this.state.search;
        newSearch.pop();
        newSearch.push(Artist)
        this.setState({ search: newSearch, value: "" });
        console.log(this.state.search);
    };

    addToList = () => {
        this.setState({ id: this.state.id + 1 });
        const newSearch = this.state.search;
        const SearchArtist = newSearch.pop();
        const tempId = this.state.id;
        const Artist = {
            label: SearchArtist.name,
            id: this.state.id,
            icon: < Avatar />,
            remove: <Button size="small" onClick={() => this.deleteFromList(tempId)}>Delete</Button>,
            view: <Button size="small" >View</Button>
        }
        const newList = this.state.list;
        newList.push(Artist)
        this.setState({ list: newList });
        console.log(Artist.id);
    };

    deleteFromList = (key) => {
        const newList = this.state.list;
        newList.splice(key, 1);
        this.setState({ list: newList });
        this.state.list.map((todo, index) =>
            todo.id = index,
        );
        this.state.list.map((todo, index) =>
            todo.remove = <Button size="small" onClick={() => this.deleteFromList(index)}>Delete</Button>
        );
        this.setState({ id: this.state.id - 1 });
        console.log(key)
    };

    render() {

        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <DashBar />
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <form onSubmit={(evt) => this.handleSubmit(evt)}>
                        <input
                            onChange={(evt) => this.handleChange(evt)}
                            value={this.state.value}
                            placeholder="Search for for your music destination…"
                        />

                    </form>
                    {this.state.search.map((todo, index) =>
                        <Card key={index}>
                            <ListItem >
                                <ListItemIcon>
                                    {todo.icon}
                                </ListItemIcon>
                                <ListItemText inset primary={todo.name} />
                                {<Button onClick={this.addToList}>
                                    add
                                </Button >}
                                <Button >
                                    view
                                </Button >
                            </ListItem>
                        </Card>
                    )}
                    {this.state.list.map((todo, index) =>
                        <Card key={index}>
                            <ListItem >
                                <ListItemIcon>
                                    {todo.icon}
                                </ListItemIcon>
                                <ListItemText inset primary={todo.label} />
                                <Card>{todo.remove}</Card>
                                <Card>{todo.view}</Card>
                            </ListItem>
                        </Card>

                    )}
                </main>
            </div >
        );
    }
}



export default withStyles(styles)(NestedList);