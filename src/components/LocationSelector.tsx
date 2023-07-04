import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useQuery } from "@apollo/client";
import { GET_LOCATION } from "../services/apolloClient";

const LocationSelector = () => {
  const setSelectedPlatformId = useGameQueryStore((s) => s.setLocationId);
  const sdfsdf = useGameQueryStore((s) => s.gameQuery);
  const { loading, error, data } = useQuery(GET_LOCATION);
  return (
    <Menu>
      {/* MenuButton component serves as the trigger for the menu */}
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Location List: {sdfsdf.LocationId}
      </MenuButton>
      {/* MenuList component contains the menu items */}
      <MenuList>
        {/* Render a menu item for selecting the "Universe" option */}
        <MenuItem onClick={() => setSelectedPlatformId(0)}>Universe</MenuItem>
        {/* Render menu items based on the data from the query */}
        {data?.locations?.results.map((platform: any) => (
          <MenuItem
            onClick={() => setSelectedPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LocationSelector;
