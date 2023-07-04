import {
  Box,
  Card,
  CardBody,
  Flex,
  HStack,
  Heading,
  Tooltip,
  Image,
  Spinner,
} from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Game from "../entities/Game";
import EpisodeBadge from "./EPBadge";
import { useState } from "react";

interface Props {
  game: Game;
}

const GameCard = ({ game, id }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Card minHeight={600}>
      {id > 6 ? (
        <LazyLoadImage
          src={game?.image}
          alt="Game Image"
          className="full-width-image"
          effect="blur"
          delayMethod="debounce" // Optional - method for delaying the loading of images (e.g., "debounce" or "throttle")
          delayTime={700}
          threshold={0.2}
        />
      ) : (
        <>
          {isLoading && (
            <Box
              display={"flex"}
              height={400}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Spinner height={10} width={10} />
            </Box>
          )}
          <Image src={game?.image} onLoad={handleImageLoad} />
        </>
      )}
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <EpisodeBadge score={game?.episode?.[0]?.name} />
        </HStack>
        <Heading fontSize="2xl">
          <div>{game.name}</div>
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
