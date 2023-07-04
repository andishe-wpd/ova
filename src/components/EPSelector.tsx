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

export default EPSelector;
