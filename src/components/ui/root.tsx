import { Box, Button, HStack } from "@chakra-ui/react";
import { FaAirbnb } from "react-icons/fa";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <Box>
      <HStack
        justifyContent={"space-between"}
        py={5}
        px={10}
        borderBottomWidth={1}
      >
        <Box color="red.500">
          <FaAirbnb size={"48"} />
        </Box>
        <HStack spaceX={2}>
          <Button>Log in</Button>
          <Button colorPalette={"red"}>Sign up</Button>
        </HStack>
      </HStack>
      <Outlet />
    </Box>
  );
}
