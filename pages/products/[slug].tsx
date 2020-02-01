import { Flex, Box } from "rebass";
import dynamic from "next/dynamic";

import Layout from "../../components/Layout";
import ProductDesc from "../../components/ProductDesc";
import ProductPrice from "../../components/ProductPrice";
import { NextPageContext } from "next";
const Carousel = dynamic(() => import("../../components/Carousell"), {
  ssr: false
});

const Detail = props => {
  const { title, description, imgs, price } = props;
  return (
    <Layout>
      <Flex flexWrap="wrap" padding="20px" height="100%">
        <Box width={[1 / 1, 1 / 2, 1 / 3]} my={[20, 0, 0]}>
          <Carousel imgs={imgs} />
        </Box>
        <Box width={[1 / 1, 1 / 2, 1 / 3]} my={[20, 0, 0]}>
          <ProductDesc product={{ title, description, price }} />
        </Box>
        <Box width={[1 / 1, 1 / 2, 1 / 3]} my={[20, 0, 0]}>
          <ProductPrice price={price} />
        </Box>
      </Flex>
    </Layout>
  );
};

Detail.getInitialProps = async (props: NextPageContext) => {
  const { slug } = props.query;
  try {
    const { attributes } = await import(`../../_products/${slug}.md`);
    return { ...attributes };
  } catch (err) {
    console.error(err);
  }
  return {};
};
export default Detail;
