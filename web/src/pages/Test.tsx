import React, { Component } from "react";
import { eventQuery } from "../graphql/eventQuery";
import { Query } from "react-apollo";

export class Test extends Component {
  state = {};
  get = id => {
    return (
      <Query query={eventQuery} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return <div>loading</div>;
          console.log(data);
          return (
            <ul>
              {data.eventSearch.resultsPage.results.event.map(
                (
                  {
                    id,
                    displayName,
                    uri,
                    location,
                    type,
                    venue,
                    start,
                    performance
                  },
                  index
                ) => {
                  return (
                    <li key={index}>
                      <div>
                        <strong>name</strong>: {displayName}
                        <br />
                        <strong>id</strong>: {id}
                        <br />
                        <strong>uri</strong>: {uri}
                        <br />
                        <strong>location</strong>: {location.city}
                        <br />
                        <strong>type</strong>: {type}
                        <br />
                        <strong>venue</strong>: {venue.displayName}
                        <br />
                        <strong>start</strong>: {start.date}
                        <br />
                        <strong>performers</strong>:
                        <ul style={{ listStyle: "none", position: "sticky" }}>
                          {performance.map((e, index) => {
                            return (
                              <li key={index} style={{ float: "left" }}>
                                {e.artist.displayName}
                                <span style={{ marginRight: "20px" }} />
                              </li>
                            );
                          })}
                        </ul>
                        <br />
                        <br />
                      </div>
                    </li>
                  );
                }
              )}
            </ul>
          );
        }}
      </Query>
    );
  };
  render() {
    return <div>{this.get(660883)}</div>;
  }
}
export default Test;
