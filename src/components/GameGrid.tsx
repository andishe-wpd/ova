import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import { useEffect } from "react";
import { client, GET_CHARACTERS } from "../services/apolloClient";
import { useState } from "react";
import { useQuery } from "@apollo/client";
const GameGrid = () => {
  const [charachters, setCharachters] = useState([]);

  const skeletons = [1, 2, 3, 4, 5, 6];

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { data } = await client.query({
  //         query: GET_CHARACTERS,
  //       });

  //       setCharachters(data.characters.results);
  //       console.log(data.characters.results);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  const { loading, error, data } = useQuery(GET_CHARACTERS());

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
              <GameCard game={game} />
            </GameCardContainer>
          ))}
    </SimpleGrid>
  );
};

export default GameGrid;
