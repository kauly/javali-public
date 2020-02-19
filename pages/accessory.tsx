import { Flex, Box, Heading, Text } from "rebass";
import { NextPage } from "next";

import Layout from "../components/Layout";
import Back from "../components/BackBar";
import Whats from "../components/Whats";
import Carousell from "../components/Carousell";

interface IAcessory {
  text?: string;
  imgs?: [string];
}

const defaultProps: IAcessory = {
  text: ""
};

const Acessory: NextPage<IAcessory> = props => {
  return (
    <Layout>
      <Flex flexWrap="wrap">
        <Back />
        <Box width={1 / 1}>
          <Heading variant="headers">acessoria</Heading>
        </Box>
        <Box
          width={1 / 1}
          sx={{
            textAlign: "center",
            marginBottom: 4
          }}
        >
          <Text variant="normal">{props.text}</Text>
        </Box>
        <Box width={1 / 1}>
          <Box>
            <Carousell imgs={props.imgs} size="600px" />
          </Box>
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
Acessory.getInitialProps = async () => {
  const { text, imgs } = await require("../_pages/accessory.yml");
  return { text, imgs };
};

export default Acessory;
