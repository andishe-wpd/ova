import { Box, Grid, Show, GridItem, Flex } from "@chakra-ui/react";
import GameGrid from "../components/EPGrid";
import EPHeading from "../components/EPHeading";
import PlatformSelector from "../components/PlatformSelector";
import EPSelector from "../components/EPSelector";

const HomePage = () => {
  return (
    <Grid>
      <Box paddingLeft={2}>
        <EPHeading />
        <Flex marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector />
          </Box>
          <EPSelector />
        </Flex>
      </Box>
      <GameGrid />
    </Grid>
  );
};

export default HomePage;
