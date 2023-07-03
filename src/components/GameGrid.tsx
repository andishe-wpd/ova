import { useQuery } from "@apollo/client";
import { SimpleGrid } from "@chakra-ui/react";
import { GET_CHARACTERS } from "../services/apolloClient";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import useGameQueryStore from "../store";
const GameGrid = () => {
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
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))
        : data?.characters?.results?.map((game, index) => (
            <GameCardContainer key={index}>
              <GameCard game={game} id={index}/>
            </GameCardContainer>
          ))}
    </SimpleGrid>
  );
};

export default GameGrid;
