import {
  Box,
  Card,
  CardBody,
  Flex,
  HStack,
  Heading,
  Tooltip,
} from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Game from "../entities/Game";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card height={550}>
      <LazyLoadImage
        src={game?.image}
        alt="Game Image"
        className="full-width-image"
        width={400}
        height={400}
        effect="blur"
      />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <div>{game.name}</div>
          <Emoji rating={game.rating_top} />
        </Heading>
        <Flex justifyContent={"space-between"}>
          species: {game.species}
          <Tooltip label={game?.status}>
            <Box
              w="20px"
              h="20px"
              borderRadius="50%"
              backgroundColor={`${
                game?.status === "Alive" ? "green.500" : "red.500"
              }`}
            />
          </Tooltip>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default GameCard;
