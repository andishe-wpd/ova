import { useQuery } from "@apollo/client";
import { SimpleGrid } from "@chakra-ui/react";
import { GET_CHARACTERS } from "../services/apolloClient";
import EPCard from "./EPCard";
import EPCardContainer from "./EPCardContainer";
import GameCardSkeleton from "./EPCardSkeleton";
import useGameQueryStore from "../store";
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
        ? skeletons.map((skeleton) => (
            <EPCardContainer key={skeleton}>
              <GameCardSkeleton />
            </EPCardContainer>
          ))
        : data?.characters?.results?.map((game, index) => (
            <EPCardContainer key={index}>
              <EPCard game={game} id={index} />
            </EPCardContainer>
          ))}
    </SimpleGrid>
  );
};

export default EPGrid;
