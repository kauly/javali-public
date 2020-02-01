import { Flex, Box, Image, Text } from "rebass";

import { IProduct } from "../layers/ProductsContext";

interface ICartItem {
  item?: IProduct;
  qutd?: number;
}

const CartItem = (props: ICartItem) => {
  return (
    <Flex
      justifyContent="space-around"
      sx={{
        borderBottom: "2px solid black",
        padding: 10,
        width: "80%"
      }}
    >
      <Box width={1 / 2}>
        <Flex justifyContent="center">
          <Image src={props.item.imgs.replace("/public", "")} size="120px" />
          <Text ml="2" variant="normal">
            {props.item.title}
          </Text>
        </Flex>
      </Box>
      <Box width={1 / 2}>
        <Text textAlign="center" variant="normal">
          R${props.item.price}
        </Text>
      </Box>
    </Flex>
  );
};

export default CartItem;
