import React from 'react';
import DashBar from '../components/DashBar'
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles, Theme } from "@material-ui/core/styles";
import { WithStyles, createStyles, Divider, Grid, InputBase, List, } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';


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
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,

    },
});


class NestedList extends React.Component<WithStyles<typeof styles>> {

    state = {
        value: "",
        id: 0,
        search: [],
        list: []
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
            icon: <Avatar />,
            remove: <Button onClick={() => this.deleteFromList(tempId)}>Delete</Button>,
            view: <Link to={{
                pathname: "./View",
                data: SearchArtist.name
            }}
                style={{ textDecoration: 'none' }}>
                <Button >
                    view
                </Button >
            </Link>
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
                    <Grid container spacing={40}>
                        <Grid>

                        </Grid>
                        <Grid>
                            <form onSubmit={(evt) => this.handleSubmit(evt)}>
                                <InputBase
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    onChange={(evt) => this.handleChange(evt)}
                                    value={this.state.value}
                                    placeholder="Search for for your music destination…"
                                />
                            </form>
                            <Card>
                                {this.state.search.map((todo, index) =>
                                    <List key={index}>
                                        <ListItem >
                                            <ListItemIcon>
                                                {todo.icon}
                                            </ListItemIcon>
                                            <ListItemText inset primary={todo.name} />
                                            <Card>
                                                <Button onClick={this.addToList}>
                                                    add
                                        </Button >
                                            </Card>
                                            <Card>
                                                <Link to={"./View"} style={{ textDecoration: 'none' }}>
                                                    <Button >
                                                        view
                                        </Button >
                                                </Link>
                                            </Card>
                                        </ListItem>
                                    </List>
                                )}
                            </Card>
                            <Divider />
                            <Card>
                                {this.state.list.map((todo, index) =>
                                    <List
                                        key={index}
                                    >
                                        <ListItem >
                                            <ListItemIcon>
                                                {todo.icon}
                                            </ListItemIcon>
                                            <ListItemText inset primary={todo.label} />
                                            <Card>{todo.remove}</Card>
                                            <Card>{todo.view}</Card>
                                        </ListItem>
                                    </List>
                                )}
                            </Card>
                        </Grid>
                    </Grid>
                </main>
            </div >
        );
    }
}


export default withStyles(styles)(NestedList);