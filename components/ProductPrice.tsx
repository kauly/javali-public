import { Flex, Heading } from "rebass";
import { useRouter } from "next/router";
import { useContext, MouseEvent } from "react";

import Button from "../components/Button";
import Context, { IProduct } from "../layers/ProductsContext";

interface IProductPrice {
  product: IProduct;
}

const ProductPrice = (props: IProductPrice) => {
  const { handleProducts } = useContext(Context);
  const router = useRouter();

  const _handleClick = (e: MouseEvent) => {
    e.preventDefault();
    handleProducts(props.product);
    router.push(`/cart`);
  };

  return (
    <Flex
      sx={{
        border: "2px solid black",
        borderRadius: 8,
        height: "500px",
        padding: 20,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        margin: "auto"
      }}
    >
      <Flex
        sx={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%"
        }}
      >
        <Heading variant="headers">{`R$ ${props.product.price}`}</Heading>
      </Flex>
      <Flex
        sx={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%"
        }}
      >
        <Button
          variant="primary"
          onClick={_handleClick}
          sx={{
            width: "80%",
            height: 60
          }}
        >
          Carrinho
        </Button>
        <Button
          variant="outline"
          onClick={_handleClick}
          sx={{
            width: "80%",
            height: 60
          }}
        >
          Comprar
        </Button>
      </Flex>
    </Flex>
  );
};

export default ProductPrice;
