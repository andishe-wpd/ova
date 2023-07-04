import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../store";
import Countdown from "./Countdown";
import { useState } from "react";

const EPHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const [header, setHeader] = useState("");

  return (
    <Heading as="h1" marginY={5} fontSize="5xl" minHeight={100}>
      {header}
      <Countdown
        countdownTime={5}
        onComplete={() => {
          setHeader("Time to get schwifty!");
        }}
      />
    </Heading>
  );
};

export default EPHeading;
