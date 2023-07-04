import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  // Access the color mode and toggleColorMode function from Chakra UI's useColorMode hook
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      {/* Switch component to toggle between light and dark mode */}
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      {/* Text to display the current mode */}
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
