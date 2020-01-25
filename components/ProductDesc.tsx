import { Flex, Heading, Text } from "rebass";

const ProductDesc = props => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Heading variant="headers">{props.product.title}</Heading>
      <Text variant="normal">{props.product.description}</Text>
    </Flex>
  );
};

export default ProductDesc;
