import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useQuery } from "@apollo/client";
import { GET_LOCATION } from "../services/apolloClient";
const PlatformSelector = () => {
  const setSelectedPlatformId = useGameQueryStore((s) => s.setLocationId);
  const sdfsdf = useGameQueryStore((s) => s.gameQuery);
  console.log(sdfsdf);
  const { loading, error: asd, data: asdasd } = useQuery(GET_LOCATION);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {/* {selectedPlatform?.name || "Locations"} */}
        Locations
      </MenuButton>
      <MenuList>
          <MenuItem
            onClick={() => setSelectedPlatformId('')}
          >
            Universe
          </MenuItem>
        {asdasd?.locations?.results.map((platform) => (
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

export default PlatformSelector;
