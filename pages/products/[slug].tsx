import { Flex, Box } from "rebass";
import dynamic from "next/dynamic";
import { NextPageContext } from "next";

import Layout from "../../components/Layout";
import ProductDesc from "../../components/ProductDesc";
import ProductPrice from "../../components/ProductPrice";
import Back from "../../components/BackBar";

const Carousel = dynamic(() => import("../../components/Carousell"), {
  ssr: false
});

const Detail = props => {
  const { title, description, imgs, price } = props;
  return (
    <Layout>
      <Flex flexWrap="wrap" height="100%">
        <Back />
        <Box width={[1 / 1, 1 / 2, 1 / 3]} my={[20, 0, 0]}>
          <Carousel imgs={imgs} />
        </Box>
        <Box width={[1 / 1, 1 / 2, 1 / 3]} my={[20, 0, 0]}>
          <ProductDesc product={{ title, description, price }} />
        </Box>
        <Box width={[1 / 1, 1 / 2, 1 / 3]} my={[20, 0, 0]}>
          <ProductPrice product={props} />
        </Box>
      </Flex>
    </Layout>
  );
};

Detail.getInitialProps = async (props: NextPageContext) => {
  const { slug } = props.query;
  try {
    const product = await import(`../../_products/${slug}.yml`);
    return { ...product };
  } catch (err) {
    console.error(err);
  }
  return {};
};
export default Detail;
