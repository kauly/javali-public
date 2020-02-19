import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import { Flex, Box, Heading, Text } from "rebass";

interface ILocation {
  data: any;
}

const Map = (props: ILocation) => {
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
          <Heading variant="headers" marginTop={[3, 6, 6]}>
            Localização
          </Heading>
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
            <Heading variant="headers" marginTop={[3, 6, 6]}>
              Endereço
            </Heading>
            <Text variant="normal">{props.data.address}</Text>
            <Heading variant="headers" marginTop={[3, 6, 6]}>
              Contato
            </Heading>
            {props.data.contacts.map(contact => (
              <Text variant="normal" key={contact}>
                {contact}
              </Text>
            ))}
          </Flex>
        </Box>
      </Flex>
    </section>
  );
};

export default Map;
