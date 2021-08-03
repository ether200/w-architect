import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://w-architect-backend.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
