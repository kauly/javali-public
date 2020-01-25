import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import { Flex, Box, Heading, Text } from "rebass";

const Map = () => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <section id="location">
      <Flex flexWrap="wrap" width="100%">
        <Box width={1 / 1}>
          <Heading variant="headers">Localização</Heading>
        </Box>
        <Box width={[3 / 3, 2 / 3, 2 / 3]}>
          <Flex>
            <ReactMapGL
              {...viewport}
              onViewportChange={setViewport}
              width="100vw"
              height="600px"
              mapStyle="mapbox://styles/mapbox/dark-v9"
            />
          </Flex>
        </Box>
        <Box width={[1 / 1, 1 / 3, 1 / 3]} bg="navbarBg">
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Heading variant="headers">Endereço</Heading>
            <Text variant="normal">Rua da Paz, Kobrassol, São José - SC</Text>
            <Heading variant="headers">Contato</Heading>
            <Text variant="normal">(48) 988231211</Text>
          </Flex>
        </Box>
      </Flex>
    </section>
  );
};

export default Map;
