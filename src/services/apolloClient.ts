import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

export const GET_CHARACTERS = () => gql`
  query {
    characters(page: 1) {
      info {
        count
        pages
        next
        prev
      }
      results {
        name
        status
        species
        type
        gender
        created
        image
      }
    }
  }
`;
export const GET_LOCATION = gql`
  query {
    locations {
      info {
        count
      }
      results {
        name
        id
        type
        dimension
        created
      }
    }
  }
`;
