import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {/* {heading} */}
      Time to get schwifty!
    </Heading>
  );
};

export default GameHeading;
