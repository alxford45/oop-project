import React from 'react';
import DashBar from '../components/DashBar'
import ListData from '../components/ListData'
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
    inputRoot: {
        color: 'inherit',
        width: '100%',
        background: 'white',
        marginBottom: 20
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,

    },
    searchCardRoot: {
        background: 'linear-gradient(45deg, #78909c 30%, #b0bec5 90%)',
    },


    listCardRoot: {
        background: 'linear-gradient(45deg, #78909c 30%, #b0bec5 90%)',
    },

    ButtonRoot: {
        background: 'linear-gradient(45deg, #00e676 30%, #b9f6ca 90%)',
    },


});


class Edit extends React.Component<WithStyles<typeof styles>> {



    state = {
        value: "",
        id: 0,
        search: [],
        list: [],
        data: 0
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
        const { classes } = this.props;
        this.setState({ id: this.state.id + 1 });
        const newSearch = this.state.search;
        const SearchArtist = newSearch.pop();
        const tempId = this.state.id;
        const Artist = {
            label: SearchArtist.name,
            id: this.state.id,
            icon: <Avatar />,
            remove: <Button
                classes={{
                    root: classes.ButtonRoot,
                }}
                onClick={() => this.deleteFromList(tempId)}
            >
                Delete
            </Button>,
            view: <Link to={{
                pathname: "./View",
                data: this.state.data
            }}
                style={{ textDecoration: 'none' }}>
                <Button
                    classes={{
                        root: classes.ButtonRoot,
                    }}
                >
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
        const { classes } = this.props;
        const newList = this.state.list;
        newList.splice(key, 1);
        this.setState({ list: newList });
        this.state.list.map((todo, index) =>
            todo.id = index,
        );
        this.state.list.map((todo, index) =>
            todo.remove = <Button
                classes={{
                    root: classes.ButtonRoot,
                }}
                size="small"
                onClick={() => this.deleteFromList(index)}>
                Delete
            </Button>
        );
        this.setState({ id: this.state.id - 1 });
        console.log(key)
    };

    handleSave = () => {

    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <DashBar />
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Grid container spacing={40}>
                        <Grid
                            justify="center"
                            item sm={6} md={4} lg={4}
                        >
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
                            <Card
                                classes={{
                                    root: classes.searchCardRoot,
                                }}
                            >
                                {this.state.search.map((todo, index) =>
                                    <List key={index}>
                                        <ListItem >
                                            <ListItemIcon>
                                                {todo.icon}
                                            </ListItemIcon>
                                            <ListItemText inset primary={todo.name} />
                                            <Card>
                                                <Button
                                                    classes={{
                                                        root: classes.ButtonRoot,
                                                    }}
                                                    onClick={this.addToList}
                                                >
                                                    add
                                                </Button >
                                            </Card>
                                            <Card>
                                                <Link to={"./View"} style={{ textDecoration: 'none' }}>
                                                    <Button
                                                        classes={{
                                                            root: classes.ButtonRoot,
                                                        }}
                                                    >
                                                        view
                                                    </Button >
                                                </Link>
                                            </Card>
                                        </ListItem>
                                    </List>
                                )}
                            </Card>
                        </Grid>
                        <Divider />
                        <Grid item sm={6} md={4} lg={3}></Grid>
                        <Grid item sm={6} md={4} lg={4}>
                            <Card>

                                <Card
                                    classes={{
                                        root: classes.listCardRoot,
                                    }}
                                >
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
                            </Card>
                        </Grid>
                    </Grid>
                </main>
            </div >
        );
    }
}


export default withStyles(styles)(Edit);