import { Flex, Box, Heading } from "rebass";

import { getProducts } from "../layers/api";
import { IProductArr } from "../layers/ProductsContext";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import ProductMini from "../components/ProductMini";
import Location from "../components/Location";

interface IIndex {
  products: IProductArr;
}

const Index = (props: IIndex) => {
  return (
    <Layout>
      <Flex width="100%" alignItems="flex-start" flexWrap="wrap">
        <Box width={1 / 1}>
          <SearchBar />
        </Box>
        <Box width={1 / 1}>
          <Heading variant="headers">produtos</Heading>
        </Box>
        <Box width={1 / 1}>
          <Flex
            width="100%"
            alignItems="flex-start"
            flexWrap="wrap"
            justifyContent="center"
          >
            {props.products.map(product => (
              <ProductMini product={product} key={product.id} />
            ))}
          </Flex>
        </Box>
        <Box width={1 / 1}>
          <Location />
        </Box>
      </Flex>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const res = await getProducts();
  return res.success ? { products: res.data } : { products: [] };
};

export default Index;
