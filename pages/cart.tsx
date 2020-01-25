import { useContext } from "react";
import { Flex, Box, Heading } from "rebass";

import Layout from "../components/Layout";
import CartItem from "../components/CartItem";
import Context, { IProduct } from "../layers/ProductsContext";

const Cart = props => {
  const { products } = useContext(Context);
  return (
    <Layout>
      <Flex flexWrap="wrap" width="100%">
        <Box width={1 / 1}>
          <Heading variant="headers">carrinho</Heading>
        </Box>
        <Box width={1 / 1}>
          <Flex my="20px" flexDirection="column" alignItems="center">
            {products &&
              products.map((p: IProduct) => <CartItem item={p} key={p.id} />)}
          </Flex>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Cart;
