import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import useGameQueryStore from "../store";

export const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

export const GET_CHARACTERS = (
  name = "",
  location: number | string | undefined = "",
  episodes: any = []
) => gql`
  query {
    characters(filter: { name: "${name}" }) {
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
    location(id: "${location}") {
      id
    }
    episodesByIds(ids: [${episodes}]) {
      id
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

export const GET_EPISODES = gql`
  query {
    episodes {
      info {
        count
      }
      results {
        name
        id
      }
    }
  }
`;
