import { Box, Grid, Show, GridItem, Flex } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import EpisodeSelector from "../components/EpisodeSelector";

const HomePage = () => {
  return (
    <Grid>
      <Box paddingLeft={2}>
        <GameHeading />
        <Flex marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector />
          </Box>
          <EpisodeSelector />
        </Flex>
      </Box>
      <GameGrid />
    </Grid>
  );
};

export default HomePage;
