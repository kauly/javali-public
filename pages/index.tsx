import { Flex, Box, Heading } from "rebass";
import { IProductArr } from "../layers/ProductsContext";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import ProductMini from "../components/ProductMini";
import Location from "../components/Location";

interface IIndex {
  products: IProductArr;
  location: any;
  categoriesList?: [];
}

const Index = (props: IIndex) => {
  return (
    <Layout>
      <Flex width="100%" alignItems="flex-start" flexWrap="wrap">
        <Box width={1 / 1}>
          <SearchBar items={props.categoriesList} />
        </Box>
        <Box width={1 / 1}>
          <Heading variant="headers" marginTop={[3, 6, 6]}>
            produtos
          </Heading>
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
          <Location data={props.location} />
        </Box>
      </Flex>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const products = (context => {
    const keys = context.keys();
    return keys.map(context);
    //@ts-ignore
  })(require.context("../_products", true, /\.yml$/));

  const location = await require("../_pages/location.yml");
  const { categoriesList } = await require("../_pages/categories.yml");
  return {
    products,
    location,
    categoriesList
  };
};

export default Index;
