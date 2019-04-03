import React, { Component } from "react";
import MediaCard from "../components/MediaCard";
import ListProvider from "../components/ListProvider";

class Home extends Component {
  render() {
    return (
      <ListProvider>
        <div>
          <MediaCard />
        </div>
      </ListProvider>
    );
  }
}
export default Home;
