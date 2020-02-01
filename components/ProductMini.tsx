import { useContext } from "react";
import { Card, Image, Heading, Flex } from "rebass";

import Button from "./Button";
import Context, { IProduct } from "../layers/ProductsContext";

interface IProductMini {
  product: IProduct;
}

const ProductMini = (props: IProductMini) => {
  const { handleQutd, handleProducts } = useContext(Context);

  return (
    <Card
      width={256}
      marginRight={[15, 30, 30]}
      marginBottom={[15, 30, 30]}
      sx={{
        p: 1,
        borderRadius: 2,
        boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
        textTransform: "capitalize"
      }}
    >
      <Image src={props.product.imgs.replace("/public", "")} size="250px" />
      <Heading my="10px">{props.product.title}</Heading>
      <Flex flexDirection="column">
        <Button
          variant="primary"
          my="4px"
          onClick={() => handleProducts(props.product)}
        >
          Carrinho
        </Button>
        <Button
          variant="outline"
          href={`products/[slug]`}
          las={`products/${props.product.title}`}
        >
          Comprar
        </Button>
      </Flex>
    </Card>
  );
};

export default ProductMini;
