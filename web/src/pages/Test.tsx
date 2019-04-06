import { gql } from "apollo-boost";
import React, { Component } from "react";
import { Query } from "react-apollo";
import { searchQuery } from "../graphql/searchQuery";

class Test extends Component {
  state = {
    search: ""
  };
  handleChange = e => {
    this.state.search = e;
  };
  get = ({ name }) => {
    return (
      <Query query={searchQuery} variables={{ name }}>
        {({ loading, error, data }) => {
          if (loading) return <div>loading</div>;
          console.log(data.search.artists.items);
          return (
            <ul>
              {data.search.artists.items.map(({ name, id }, index) => {
                return (
                  <li key={index}>
                    <div>
                      <strong>name</strong>: {name} <br />
                      <strong>id</strong>: {id} <br />
                      <br />
                    </div>
                  </li>
                );
              })}
            </ul>
          );
        }}
      </Query>
    );
  };
  render() {
    return (
      <div>
        <form>
          Search: <input type="text" onChange={this.handleChange} />
        </form>
        <button>Search</button>
        <div>{this.get({ name: "pitbull" })}</div>
      </div>
    );
  }
}
export default Test;
