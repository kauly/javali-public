import { useContext } from "react";
import { Flex, Box, Heading, Text } from "rebass";

import Layout from "../components/Layout";
import CartItem from "../components/CartItem";
import Back from "../components/BackBar";
import Whats from "../components/Whats";
import Context, { IProduct } from "../layers/ProductsContext";

const Cart = props => {
  const { products } = useContext(Context);
  return (
    <Layout>
      <Flex flexWrap="wrap" width="100%">
        <Back />
        <Box width={1 / 1}>
          <Heading variant="headers">carrinho</Heading>
        </Box>
        <Box width={1 / 1}>
          <Flex my="20px" flexDirection="column" alignItems="center">
            {products && products.length ? (
              products.map((p: IProduct) => <CartItem item={p} key={p.title} />)
            ) : (
              <Text variant="normal">Seu carrinho está vazio.</Text>
            )}
          </Flex>
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

export default Cart;
