import { Flex, Box, Heading, Text } from "rebass";
import { FunctionComponent } from "react";

import Layout from "../components/Layout";
import Back from "../components/BackBar";
import Whats from "../components/Whats";

interface IAcessory {
  text?: string;
  imgs?: [string];
}

const defaultProps: IAcessory = {
  text: ""
};

const Acessory: FunctionComponent<IAcessory> = props => {
  return (
    <Layout>
      <Flex flexWrap="wrap" width="100%">
        <Back />
        <Box width={1 / 1}>
          <Heading variant="headers" marginTop="1px">
            acessoria
          </Heading>
        </Box>
        <Box width={1 / 1}>
          <Text>{props.text}</Text>
        </Box>
        <Box width={1 / 1}>
          <Flex justifyContent="center">
            <Whats />
          </Flex>
        </Box>
      </Flex>
    </Layout>
  );
};

Acessory.defaultProps = defaultProps;

export default Acessory;
