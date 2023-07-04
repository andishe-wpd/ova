import { useQuery } from "@apollo/client";
import { SimpleGrid } from "@chakra-ui/react";
import { GET_CHARACTERS } from "../services/apolloClient";
import EPCard from "./EPCard";
import EPCardContainer from "./EPCardContainer";
import EPCardSkeleton from "./EPCardSkeleton";
import useGameQueryStore from "../store";
import Character from "../entities/Character";

const EPGrid = () => {
  const skeletons = [1, 2, 3, 4, 5, 6];
  const sdfsdf = useGameQueryStore((s) => s.gameQuery);
  const { loading, error, data } = useQuery(
    GET_CHARACTERS(sdfsdf?.searchText, sdfsdf?.LocationId, sdfsdf?.sortOrder)
  );

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding="10px"
    >
      {loading
        ? // Render skeleton cards while data is being fetched
          skeletons.map((skeleton) => (
            <EPCardContainer key={skeleton}>
              <EPCardSkeleton />
            </EPCardContainer>
          ))
        : // Render the actual cards with character data
          data?.characters?.results?.map((game: Character, index: number) => (
            <EPCardContainer key={index}>
              <EPCard game={game} id={index} />
            </EPCardContainer>
          ))}
    </SimpleGrid>
  );
};

export default EPGrid;
