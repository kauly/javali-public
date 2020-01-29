import { Flex, Box, Image, Text } from "rebass";

import { IProduct } from "../layers/ProductsContext";

interface ICartItem {
  item?: IProduct;
  qutd?: number;
}

const CartItem = (props: ICartItem) => {
  return (
    <Flex width="100%" justifyContent="space-around">
      <Box width={1 / 3}>
        <Flex>
          <Image src={props.item.thumbnail} />
          <Text>{props.item.title}</Text>
        </Flex>
      </Box>
      <Box width={1 / 3}>
        <Text>Quantidade:</Text>
      </Box>
      <Box width={1 / 3}>
        <Text>{props.item.price}</Text>
      </Box>
    </Flex>
  );
};

export default CartItem;
