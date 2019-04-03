import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { ArtistList } from "../list/ArtistList";

const defaultValue = new ArtistList();

export const ListContext = React.createContext("");

class ListProvider extends Component<any, any> {



    constructor(props: any) {
        super(props);
        this.state = {
            list: this.props.list,
            name: "state is working"
        };
    }

    render() {
        console.log(this.state.list);

        return (
            <ListContext.Provider value={this.state.list}>
                {this.props.children}
            </ListContext.Provider>

        );
    }
}

export default ListProvider;
