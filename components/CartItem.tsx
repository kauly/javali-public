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
      alignItems="center"
      sx={{
        borderBottom: "2px solid black",
        padding: 3,
        width: ["100%", "80%", "80%"],
        textTransform: "uppercase"
      }}
    >
      <Image src={props.item.imgs.replace("/public", "")} size="120px" />
      <Text ml="2" variant="normal">
        {props.item.title}
      </Text>

      <Text textAlign="center" variant="normal">
        R${props.item.price}
      </Text>
    </Flex>
  );
};

export default CartItem;
