import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ArtistList } from "../list/ArtistList";
import { Button } from "@material-ui/core";

const defaultValue = new ArtistList();
let newList = new ArtistList();
export const ListContext = React.createContext("");

class ListProvider extends Component<any, any> {



    constructor(props: any) {
        super(props);
        this.state = {
            list: this.props.list,
        };
    }

    handleSave = () => {

        newList = this.state.list;
        console.log(newList);
    }



    render() {
        console.log(newList);

        return (

            <div>


            </div>
        );
    }
}

export default ListProvider;
