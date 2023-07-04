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
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";
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
          {isLoading && <Spinner height={100} width={100} />}
          <Image src={game?.image} onLoad={handleImageLoad} />
        </>
        // <div>asdsd</div>
      )}
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
          <CriticScore score={game?.episode?.[0]?.name} />
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
