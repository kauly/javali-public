import { Flex, Heading } from "rebass";
import Button from "../components/Button";

const ProductPrice = props => {
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
        <Heading variant="headers">{`R$ ${props.price}`}</Heading>
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
          href="/detail"
          sx={{
            width: "80%",
            height: 60
          }}
        >
          Carrinho
        </Button>
        <Button
          variant="outline"
          href="/detail"
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
