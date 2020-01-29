import { Flex, Box } from "rebass";
import dynamic from "next/dynamic";

import { getProduct } from "../../layers/api";
import Layout from "../../components/Layout";
import ProductDesc from "../../components/ProductDesc";
import ProductPrice from "../../components/ProductPrice";
import { NextPageContext } from "next";
import { useEffect } from "react";
const Carousel = dynamic(() => import("../../components/Carousell"), {
  ssr: false
});

const Detail = props => {
  const { title, description, thumbnail, price } = props;
  return (
    <Layout>
      <Flex flexWrap="wrap" padding="20px" height="100%">
        <Box width={[1 / 1, 1 / 2, 1 / 3]} my={[20, 0, 0]}>
          <Carousel imgs={[thumbnail]} />
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
  const { attributes } = await import(`../../_products/${slug}.md`);
  return { ...attributes };
};
export default Detail;
