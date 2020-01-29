import { Flex, Box, Heading } from "rebass";
import { getProducts } from "../layers/api";
import { IProductArr } from "../layers/ProductsContext";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import ProductMini from "../components/ProductMini";
import Location from "../components/Location";
import matter from "gray-matter";
import { useEffect } from "react";

interface IIndex {
  products: IProductArr;
}

const Index = (props: IIndex) => {
  useEffect(() => {
    console.log(props);
  });
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
            {props.products.map((product, i) => (
              <ProductMini product={product} key={i} />
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
  const products = (context => {
    const keys = context.keys();
    const values = keys.map(context);
    return values.map(({ attributes }) => ({ ...attributes }));
    //@ts-ignore
  })(require.context("../_products", true, /\.md$/));

  return {
    products
  };
};

export default Index;
