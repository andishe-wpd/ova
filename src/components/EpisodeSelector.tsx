import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "../services/apolloClient";
const EpisodeSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const setSortOrder = useGameQueryStore((s) => s.setSortEpisode);
  const sdfsdf = useGameQueryStore((s) => s.gameQuery);
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  const { loading, error, data } = useQuery(GET_EPISODES);
  // console.log(data?.episodes?.results);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Episode: {sdfsdf.sortOrder || "ALL EPISODES"}
      </MenuButton>
      <MenuList>
        {data?.episodes?.results.map((order) => (
          <MenuItem
            onClick={() => setSortOrder(order.id)}
            key={order.name}
            value={order.id}
          >
            {order.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default EpisodeSelector;