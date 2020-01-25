import { useContext } from "react";
import Link from "next/link";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import ProductsContext from "../layers/ProductsContext";

const CartIcon = () => {
  const { qutd } = useContext(ProductsContext);

  return (
    <Link href="/cart">
      <IconButton arial-label="carrinho">
        <Badge badgeContent={qutd} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Link>
  );
};

export default CartIcon;
