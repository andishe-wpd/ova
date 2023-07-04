import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "../services/apolloClient";

const EPSelector = () => {
  const setSortOrder = useGameQueryStore((s) => s.setSortEpisode);
  const sdfsdf = useGameQueryStore((s) => s.gameQuery);

  const { data } = useQuery(GET_EPISODES);

  return (
    <Menu>
      {/* MenuButton component serves as the trigger for the menu */}
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Episode list: {sdfsdf.sortOrder || "ALL EPISODES"}
      </MenuButton>
      {/* MenuList component contains the menu items */}
      <MenuList>
        {/* Render menu items based on the data from the query */}
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

export default EPSelector;
