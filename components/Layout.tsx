import { Flex, Box } from "rebass";

import Navbar from "./Navbar";

const Layout = props => {
  return (
    <Flex flexWrap="wrap" minHeight="100vh" flexDirection="column">
      <Box width={1 / 1} height="80px">
        <Navbar />
      </Box>
      <Box width={1 / 1}>{props.children}</Box>
    </Flex>
  );
};

export default Layout;
