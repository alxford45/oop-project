import ApolloClient, {
  InMemoryCache,
  defaultDataIdFromObject
} from "apollo-boost";
import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const cache = new InMemoryCache({
  dataIdFromObject: object => {
    switch (object.__typename) {
      default:
        return defaultDataIdFromObject(object); // fall back to default handling
    }
  }
});

const client = new ApolloClient({
  uri: "http://localhost:8000",
  credentials: "include",
  cache: cache
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
