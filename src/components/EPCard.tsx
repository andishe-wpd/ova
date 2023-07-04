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
import Character from "../entities/Character";
import EPBadge from "./EPBadge";
import { useState } from "react";

interface Props {
  game: Character;
  id: number;
}

const EPCard = ({ game, id }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  // Function to handle the image load event
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Card minHeight={600}>
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
      {id > 6 ? (
        // LazyLoadImage component for images after the 6th card
        <>
          <LazyLoadImage
            src={game?.image}
            alt="Episode Image"
            className="full-width-image"
            effect="blur"
            delayMethod="debounce"
            delayTime={700}
            threshold={0.2}
            onLoadCapture={handleImageLoad}
          />
        </>
      ) : (
        <>
          {/* Display a loading spinner while the image is being loaded */}

          {/* Image component with onLoad event to handle image load */}
          <Image src={game?.image} onLoad={handleImageLoad} />
        </>
      )}
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          {/* Display the episode badge */}
          <EPBadge score={game?.episode?.[0]?.name} />
        </HStack>
        <Heading fontSize="2xl">
          <div>{game.name}</div>
        </Heading>
        <Flex justifyContent={"space-between"}>
          {/* Display the species and a tooltip for the status */}
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

export default EPCard;
