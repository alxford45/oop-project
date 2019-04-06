import { gql } from "apollo-boost";
import React, { Component } from "react";
import { Query } from "react-apollo";
import { searchQuery } from "../graphql/searchQuery";
import DashBar from "../components/DashBar";
import { InputBase, List, ListItem, ListItemIcon, ListItemText, Card, Button, Avatar, } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ArtistList } from "../list/ArtistList";

const list = new ArtistList();

class Test extends Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = {
      search: "",
      name: "pitbull",
    };
  }

  handleChange = (e) => {
    console.log("changing");
    this.setState({ search: e.target.value });
  };

  handleRequest = (e) => {
    e.preventDefault();
    console.log("submitted");
    this.setState({ name: this.state.search });
  };

  addToList = (name, id) => {
    const Artist = {
      key: 0,
      name: name,
      id: id,
      icon: < Avatar />
    }
    list.add(Artist);
    console.log("adding to list")
  };

  get = ({ name }) => {

    return (
      <Query query={searchQuery} variables={{ name }}>
        {({ loading, error, data }) => {
          if (loading) return <div>loading</div>;
          console.log(data.search.artists.items);
          return (
            <Card>
              {data.search.artists.items.map(({ name, id }, index) => {
                return (
                  <List key={index}>
                    <ListItem>
                      <ListItemIcon>
                        <Avatar />
                      </ListItemIcon>
                      <ListItemText inset primary={name} />
                      <Card>
                        <Button onClick={() => this.addToList(name, id)}>
                          add
                        </Button>
                      </Card>
                      <Card>
                        <Link to={"./View"} style={{ textDecoration: "none" }}>
                          <Button>view</Button>
                        </Link>
                      </Card>
                    </ListItem>
                  </List>
                );
              })}
            </Card>
          );
        }}
      </Query>
    );
  };
  render() {
    return (

      <div>
        <DashBar />
        <form onSubmit={evt => this.handleRequest(evt)}>
          <InputBase
            onChange={evt => this.handleChange(evt)}
            value={this.state.request}
            placeholder={"Search for for your music destination…"}
          />
        </form>
        <button>Search</button>
        <div>{this.get({ name: this.state.name })}</div>
      </div>
    );
  }
}
export default Test;
