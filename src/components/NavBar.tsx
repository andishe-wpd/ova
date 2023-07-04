import { HStack, Image, flexbox } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack display={"flex"} justifyContent={"space-between"} padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
