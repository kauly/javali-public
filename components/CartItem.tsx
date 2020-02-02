import { useContext } from "react";
import { Flex, Box, Image, Text } from "rebass";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import Context, { IProduct } from "../layers/ProductsContext";

interface ICartItem {
  item?: IProduct;
  qutd?: number;
}

const CartItem = (props: ICartItem) => {
  const { removeProduct } = useContext(Context);
  const handleClick = () => removeProduct(props.item.title);
  return (
    <Flex
      justifyContent="space-around"
      alignItems="center"
      sx={{
        borderBottom: "2px solid black",
        padding: 3,
        width: ["100%", "80%", "80%"],
        textTransform: "uppercase",
        position: "relative"
      }}
    >
      <Image src={props.item.imgs.replace("/public", "")} size="120px" />
      <Text ml="2" variant="normal">
        {props.item.title}
      </Text>

      <Text textAlign="center" variant="normal">
        R${props.item.price}
      </Text>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0
        }}
      >
        <IconButton onClick={handleClick}>
          <CloseIcon fontSize="large" color="error" />
        </IconButton>
      </Box>
    </Flex>
  );
};

export default CartItem;
